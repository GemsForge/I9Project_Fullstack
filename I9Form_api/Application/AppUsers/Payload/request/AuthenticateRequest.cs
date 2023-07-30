using System.ComponentModel.DataAnnotations;
using MediatR;

namespace I9Form_api.Application.AppUsers.Payload.request
{
    public class AuthenticateRequest
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
