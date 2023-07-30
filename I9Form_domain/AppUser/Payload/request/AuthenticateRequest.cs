using System.ComponentModel.DataAnnotations;


namespace I9Form_domain.AppUser.Payload.request
{
    public class AuthenticateRequest
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
