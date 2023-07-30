using MediatR;
using Microsoft.AspNetCore.Mvc;

//Creates a private variable of the mediator and populates the mediator service (from entry file).
namespace I9Form_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BaseApiController : ControllerBase
    {
        //Used if there is already an instance of MediatR
        private IMediator _mediator;

        //protect: available to derived controllers
        //Used for a fresh instance of MediatR
        protected IMediator Mediator
              => _mediator ??=
             HttpContext.RequestServices.GetService<IMediator>();
        

    }
}

