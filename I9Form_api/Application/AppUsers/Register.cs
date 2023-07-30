using I9Form_domain.AppUser.Entity;
using I9Form_persistence;
using MediatR;

namespace I9Form_api.Application.Authentication
{
    public class Register
    {
        public class Command : IRequest
        {
            public User User;

            public class Handler : IRequestHandler<Command>
            {
                //Inject Data context into Handler constructor
                private readonly DataContext _context;
                public Handler(DataContext context)
                {
                    _context = context;
                }

                //the request will have a user
                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {
                    //Adds the request(New User) to a User Object
                    _context.Users.Add(request.User);

                    //Saves the request(New User) to a User Object
                    await _context.SaveChangesAsync();

                    //Let's Api know that we're done
                    return Unit.Value;
                }
            }
        }
    }
}

