//using System.IdentityModel.Tokens.Jwt;
//using System.Security.Claims;
//using System.Text;
//using AutoMapper;
//using I9Form_api.Application.AppUsers.Payload.request;
//using I9Form_api.Application.AppUsers.Payload.response;
//using I9Form_api.Authentication;
//using I9Form_api.Helpers;
//using I9Form_domain.AppUser.Entity;
//using I9Form_domain.AppUser.Payload.response;
//using I9Form_persistence;
//using MediatR;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.Extensions.Options;
//using Microsoft.IdentityModel.Tokens;
//using Newtonsoft.Json.Linq;

//namespace I9Form_api.Application.AppUsers
//{
//    public partial class Authenticate
//    {
//        public class Command : IRequest
//        {
//            public AuthenticateRequest AuthUser { get; set; }
//            public AuthenticateResponse AuthResults { get; set; }
//        }


//        public class Handler : IRequestHandler<Command>
//        {
//            private readonly DataContext _dataContext;
//            private readonly AppSettings _appSettings;
//            private readonly IMapper _mapper;
//            private readonly IJwtUtils _jwtUtils;

//            private const string ValidUsername = "user";
//            private const string ValidPassword = "password";

//            public Handler(DataContext dataContext, IOptions<AppSettings> appSettings, IJwtUtils jwtUtils, IMapper mapper)
//            {
//                _dataContext = dataContext;
//                _appSettings = appSettings.Value;
//                _jwtUtils = jwtUtils;
//                _mapper = mapper;
//            }

//            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
//            {

//                //Perform authentication logic (verify against db)

//                var username = _dataContext.Users.FindAsync(request.AuthUser.Username);
//                var password = await _dataContext.Users.FindAsync(request.AuthUser.Password);


//                //if (request == null)
//                //    return await Task.FromResult(result: new AuthenticateResponse
//                //    {
//                //        IsAuthenticated = false,
//                //        ErrorMessage = "Username or password is incorrect",
//                //    }
                    
//                //        );


//                AuthenticateUser(request);

//                    var tokenHandler = new JwtSecurityTokenHandler();
//                    var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
//                    var tokenDescriptor = new SecurityTokenDescriptor
//                    {
//                        Subject = new ClaimsIdentity(new Claim[]
//                        {
//                    new Claim(ClaimTypes.Name, request.AuthUser.ToString())
//                        }),
//                        Expires = DateTime.UtcNow.AddDays(7),
//                        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
//                    };
//                    var token = tokenHandler.CreateToken(tokenDescriptor);
//                    var tokenString = tokenHandler.WriteToken(token);

                

//                return await Task.FromResult(result: new AuthenticateResponse { IsAuthenticated = true });

//            }

//            public AuthenticateResponse AuthenticateUser(Command request)
//            {

//                var username = request.AuthUser.Username;
//                var password = request.AuthUser.Password;
//                var user = _dataContext.Users.SingleOrDefault(x => x.Username == username && x.Password == password);

//                //username == "user" && password == "password";


//                // return null if user not found
//                if (user == null) return null;

//                // authentication successful so generate jwt token
//                var token = _jwtUtils.GenerateJwtToken(user);
//                return new AuthenticateResponse(user, token);
//            }

//            Task<Unit> IRequestHandler<Command, Unit>.Handle(Command request, CancellationToken cancellationToken)
//            {
//                throw new NotImplementedException();
//            }
//        }

//    }
//}

