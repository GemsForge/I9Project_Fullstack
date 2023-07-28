using I9Form_domain.AppUser.Model;

namespace I9Form_domain.AppUser.Payload.response
{
    public class AuthenticateResponse
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Token { get; set; }

        public AuthenticateResponse(User user, string token)
        {
            Id = user.Id;
            FirstName = user.FirstName;
            LastName = user.LastName;
            Username = user.Username;
            Token = token;
        }
         public AuthenticateResponse(User user)
        {
            Id = user.Id;
            FirstName = user.FirstName;
            LastName = user.LastName;
            Username = user.Username;
        }
    }
}