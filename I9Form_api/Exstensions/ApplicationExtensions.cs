using I9Form_api.Application.AppUsers;
using I9Form_api.Application.Core;
using I9Form_api.Authentication;
using I9Form_api.Helpers;
using I9Form_api.Service;
using I9Form_persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

//Add services to this file for a cleaner & shorter Program.cs file

namespace I9Form_api.Exstensions
{
    //Public makes the class accessible without creating a new instance
    public static class ApplicationExtensions
    {

        //'this': where we are using the service
        public static IServiceCollection AddApplicationServices(this IServiceCollection service, IConfiguration config)
        {


            //Tells where the Handlers are

            service.AddMediatR(typeof(List.Handler));
            service.AddAutoMapper(typeof(MappingProfile).Assembly);//<-- Locates all of the mapping profiles
            service.AddCors();

            service.AddControllers();
            service.AddEndpointsApiExplorer();
            service.AddSwaggerGen();
            service.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(config.GetConnectionString("SqlConnection"));
            });
            // configure strongly typed settings object
            service.Configure<AppSettings>(config.GetSection("AppSettings"));

            // configure DI for application services
            service.AddScoped<IJwtUtils, JwtUtils>();
            service.AddScoped<IAppUserService, AppUserService>();
            return service;
        }
    }
}

