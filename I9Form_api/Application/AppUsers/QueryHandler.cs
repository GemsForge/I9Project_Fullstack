using I9Form_domain.AppUser.Entity;
using I9Form_persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace I9Form_api.Application.AppUsers
{
    public class List

    {
        public class Query : IRequest<List<User>> { }

        public class Handler : IRequestHandler<Query, List<User>>
        {
            //inject data context
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            //Handler that returns a Task
            public async Task<List<User>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Users.ToListAsync();
            }
        }
    }
}