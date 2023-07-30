using I9Form_api.Application.AppUsers;
using I9Form_api.Application.Core;
using I9Form_api.Authentication;
using I9Form_api.Helpers;
using I9Form_api.Service;
using I9Form_persistence;
using I9Form_persistence.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to a DI container.
{
    var service = builder.Services;
    var config = builder.Configuration;

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

}

var app = builder.Build();
{
    // Configure the HTTP request pipeline.
    if (!app.Environment.IsDevelopment())
    {
        app.UseExceptionHandler("/Error");
    }
    else
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }
    app.UseCors(configurePolicy: x => x.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader().WithMethods("PUT"));
    app.UseAuthorization();

    app.MapControllers();

    using var serviceScope = app.Services.CreateScope();
    var services = serviceScope.ServiceProvider;
    var jsonFile = System.IO.File.ReadAllText(@"/Users/browndia/git/CapstoneNEW/i9Class_Library/AppUser/Data/AppUserSeedData.json");
    var logger = services.GetRequiredService<ILogger<Program>>();

    //Try and catch block for migration
    try
    {
        var context = services.GetRequiredService<DataContext>();
        await context.Database.MigrateAsync();
        //Try and catch blocks for seeding 
        try
        {
            //Read and store data from json in 'file'
            //Await - process won't proceed until it's finished
            await Seed.SeedData(jsonFile, context);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "AN ERROR OCCURRED WHILE SEEDING NEW DATA");
        }
    }
    catch (Exception ex)
    {

        logger.LogError(ex, "AN ERROR OCCURRED DURING MIGRATION");
    }
}
app.Run();

