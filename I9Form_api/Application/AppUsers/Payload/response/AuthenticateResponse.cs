using I9Form_domain.AppUser.Entity;

namespace I9Form_domain.AppUser.Payload.response
{
    public class AuthenticateResponse
    {
        public bool IsAuthenticated { get; set; }
        public string ErrorMessage { get; set; }

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
        public AuthenticateResponse() { }
    }
}