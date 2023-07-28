using I9Form_domain.AppUser.Model;
using Microsoft.EntityFrameworkCore;

namespace I9Form_persistence;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions opt) : base(opt)
    {

    }

    //represents table name
    public DbSet<User> Users { get; set; }
}
