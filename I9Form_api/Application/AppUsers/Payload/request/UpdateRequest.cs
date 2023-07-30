namespace I9Form_domain.AppUser.Payload.request
{
    public record UpdateRequest
    {

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }
    }
}