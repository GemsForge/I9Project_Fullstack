using System.ComponentModel.DataAnnotations;

/*This payload holds the data retrieve from the client post request
 and passes it to the DAO layer for it to be inserted in the database...

Required: { username, email, password}*/


namespace I9Form_domain.AppUser.Payload.request
{
    public class RegisterRequest
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        public string Email { get; internal set; }
    }
}
