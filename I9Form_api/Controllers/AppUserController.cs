using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using I9Form_api.Authentication;
using I9Form_api.Helpers;
using I9Form_api.Service;
using I9Form_domain.AppUser.Entity;
using I9Form_domain.AppUser.Payload.request;
using I9Form_persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

// The AppUser controllers will include: GetAll, GetById, Register, Authenticate,
namespace I9Form_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppUserController : BaseApiController
    {
        private readonly DataContext _dataContext;
        private readonly IAppUserService _appUserService;
        private readonly AppSettings _appSettings;


        public AppUserController(DataContext dataContext, IOptions<AppSettings> appSettings, IAppUserService appUserService)
        {
            {
                _dataContext = dataContext;
                _appSettings = appSettings.Value;
                _appUserService = appUserService;
            }
        }


        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            return await _dataContext.Users.ToListAsync();
        }

        //Get User by ID: Pass Guid id as parameter
        [HttpGet("{id}")] //api/appuser/fjofda789fs
        public async Task<ActionResult<User>> GetUser(Guid id)
        {
            return await _dataContext.Users.FindAsync(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public ActionResult<User> Authenticate(
        AuthenticateRequest response
        )
        {
            var user = _appUserService.Authenticate(response);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            // return basic user info and authentication token
            return Ok(new
            {
                Id = user.Id,
                Username = user.Username,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Token = tokenString
            });
        }

            // PUT api/values/5
            [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

