using System;
using I9Form_persistence;
using MediatR;

namespace I9Form_api.Application.AppUsers
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }

        }
        public class Handler : IRequestHandler<Command>
        {
           
        

        private readonly DataContext _dataContext;
            public Handler(DataContext dataContext)
            {
                _dataContext = dataContext;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _dataContext.Users.FindAsync(request.Id);

                _dataContext.Remove(user);//remove user from memory
                await _dataContext.SaveChangesAsync();
                return Unit.Value;
            }

        }
        
    }
}

