using I9Form_domain.Helpers;
using I9Form_domain.AppUser.Model;
using I9Form_domain.AppUser.Payload.request;
using I9Form_domain.AppUser.Payload.response;
using I9Form_persistence;

namespace I9Form_domain.AppUser.Service
{
    public interface IAppUserService
    {
        AuthenticateResponse Authenticate(AuthenticateRequest authRequest);
        IEnumerable<User> GetAll();
        User GetById(Guid id);
        void Register(RegisterRequest regRequest);
        void Update(Guid id, UpdateRequest updateRequest);
        void Delete(Guid id);
    }



    public class AppUserService : IAppUserService
    {
        private DataContext _context;
        public AppUserService(DataContext context)
        {
            _context = context;
        }


        public AuthenticateResponse Authenticate(AuthenticateRequest authRequest)
        {
            var user = _context.Users.SingleOrDefault(x => x.Username == authRequest.Username && x.Password == authRequest.Password);

            // return null if user not found
            if (user == null) return null;


            return new AuthenticateResponse(user);
        }



        public IEnumerable<User> GetAll()
        {
            return _context.Users;
        }

        public User GetById(Guid id)
        {
            return _context.Users.Find(id);
        }

        public User Register(RegisterRequest regRequest)
        {
            // validation
            if (string.IsNullOrWhiteSpace(regRequest.Password))
                throw new AppException("Password is required");

            if (_context.Users.Any(x => x.Username == regRequest.Username))
                throw new AppException("Username \"" + regRequest.Username + "\" is already taken");
            User newUser = null;
            //Add user entry as entity

            newUser = new User
            {
                FirstName = regRequest.FirstName,
                LastName = regRequest.LastName,
                Username = regRequest.Username,
                Password = regRequest.Password,
                Email = regRequest.Email
            };
            _context.Users.Add(newUser);
            _context.SaveChanges();
            return newUser;
        }

        public void Update(Guid id, UpdateRequest updateRequest)
        {
            throw new NotImplementedException();
        }
        public void Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        void IAppUserService.Register(RegisterRequest regRequest)
        {
            throw new NotImplementedException();
        }
    }
}

