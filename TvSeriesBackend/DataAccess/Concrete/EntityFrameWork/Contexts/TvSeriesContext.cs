using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Concrete.EntityFrameWork.Contexts
{
    public class TvSeriesContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            /// Docker image için kullanılacak !!   @"Server=db,1433;Initial Catalog=TvSeriesDb;User ID=SA;Password=Crazybabygirl.87"
            optionsBuilder.UseSqlServer(connectionString: @"Server=(localdb)\ProjectsV13;initial catalog=TvSeriesDb;integrated security=true");
        }

        public DbSet<Casts> Castss { get; set; }

        public DbSet<Country> Countries { get; set; }

        public DbSet<Company> Companies { get; set; }
        public DbSet<Director> Directors { get; set; }
          
        public DbSet<Producer> Producers { get; set; }
        public DbSet<Distributor> Distributors { get; set; }

        public DbSet<Genree> Genrees { get; set; }

        public DbSet<KeyWord> KeyWords { get; set; }
    
        public DbSet<HarmfulContent> HarmfulContents { get; set; }

        public DbSet<Certificate> Certificates { get; set; }

        public DbSet<apiType> apiTypes { get; set; }
        
        public DbSet<apiTypesMethod> apiTypesMethods { get; set; }

        public DbSet<TvSerie> TvSeries { get; set; }

    }
}
