using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using I9Form_api.Authentication;
using I9Form_api.Helpers;
using I9Form_api.Service;
using I9Form_domain.AppUser.Entity;
using I9Form_domain.AppUser.Payload.request;
using I9Form_api.Application.AppUsers;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using I9Form_api.Application.Authentication;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

// The AppUser controllers will include: GetAll, GetById, Register, Authenticate,
namespace I9Form_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppUserController : BaseApiController
    {
        
        private readonly IAppUserService _appUserService;
        private readonly AppSettings _appSettings;
       

        public AppUserController(IOptions<AppSettings> appSettings, IAppUserService appUserService)
        {
            {
                _appSettings = appSettings.Value;
                _appUserService = appUserService;
            }
        }


        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            //return await _dataContext.Users.ToListAsync();
            //MediatR equivalant :
            return await Mediator.Send(new List.Query());
        }

        //Get User by ID: Pass Guid id as parameter
        [HttpGet("{id}")] //api/appuser/fjofda789fs
        public async Task<ActionResult<User>> GetUser(Guid id)
        {
            //return await _dataContext.Users.FindAsync(id);
            return await Mediator.Send(new UserDetails.Query { Id = id });
        }

        // POST api/values
        // IActionResult returns status code. Sends User object in the body 
        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] User newUser)  //**FromBody isn't necessary
        {
            return Ok(await Mediator.Send(new Register.Command {User = newUser }));
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

        // PUT api/update/3fa85f64-5717-4562-b3fc-2c963f66afa6
        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateUser(Guid id, User user)
        {

            user.Id = id;
            return Ok(await Mediator.Send(new Update.Command { User = user }));
        }

        // DELETE api/values/5
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}

