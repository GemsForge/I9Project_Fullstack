using I9Form_domain.AppUser.Model;
using I9Form_persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace I9Form_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppUserController : BaseApiController
    {
        private readonly DataContext _dataContext;

        public AppUserController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }


        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            return await _dataContext.Users.ToListAsync();
        }

        // GET api/User/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(Guid id)
        {
            return await _dataContext.Users.FindAsync(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
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

