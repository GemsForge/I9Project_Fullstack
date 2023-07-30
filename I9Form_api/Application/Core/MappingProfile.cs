using AutoMapper;
using I9Form_domain.AppUser.Entity;

namespace I9Form_api.Application.Core
{
    public class MappingProfile : Profile
    {

        //from object --> to object
        public MappingProfile()
        {
            //Automaps from request User to User Object
            CreateMap<User, User>();
        }
    }
}

