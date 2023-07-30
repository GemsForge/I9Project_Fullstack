using I9Form_domain.AppUser.Entity;
using I9Form_persistence;
using MediatR;

namespace I9Form_api.Application.AppUsers
{
    public class UserDetails
    {

        public class Query : IRequest<User>
        {
            // What I want to return: User ID
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, User>
        {
            private readonly DataContext _context;
            //Inject Data context
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<User> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Users.FindAsync(request.Id);
            }
        }
    }
}

