using System;
using AutoMapper;
using I9Form_domain.AppUser.Entity;
using I9Form_persistence;
using MediatR;

namespace I9Form_api.Application.AppUsers
{
    public class Update
    {
        //2 classes in the Update Handler: Command and Handler
        public class Command : IRequest
        {
            //Returns a User
            public User User { get; set; }
        }

        //Injest Command into the IRequestHandler type
        public class Handler : IRequestHandler<Command>
        {

            //1. Injest Data context in to the Update Handler
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.FindAsync(request.User.Id);

                //user.FirstName = request.User.FirstName ?? user.FirstName;  
                //user.LastName = request.User.LastName ?? user.LastName;
                //user.Email = request.User.Email ?? user.Email;
                //user.Username = request.User.Username ?? user.Username;
                //user.Password = request.User.Password ?? user.Password;
                //^^^^^Standard way of mapping^^^^^^

                //Automapper doess all of the heavy lifting with mapping 
                _mapper.Map(request.User, user);

                await _context.SaveChangesAsync();

                //Let's Api know that we're done
                return Unit.Value;
            }
        }
    }
}

