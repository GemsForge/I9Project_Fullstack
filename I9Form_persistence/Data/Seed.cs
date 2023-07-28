using System.Text.Json;
using I9Form_domain.AppUser.Model;

namespace I9Form_persistence.Data
{
    public class Seed
    {
        public static async Task SeedData(string jsonData, DataContext context)
        {
            //will seed data if there's no data in db

            //if no AppUsers...
            if (!context.Users.Any())
            {

                //deserialize json to User list
                var userlist = JsonSerializer.Deserialize<List<User>>(jsonData);
                //Similar to a get query
                await context.Users.AddRangeAsync(userlist);
                //save changes to db.
                await context.SaveChangesAsync();
            }
        }
    }
}



