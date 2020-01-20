namespace Book_Store_Management_System_Data.Data
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using Book_Store_Management_System_Data.Models;
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// The context of the database.
    /// </summary>
    public class ApplicationDbContext: DbContext
    {
        public DbSet<BookModel> Books { get; set; }

        public DbSet<AuthorModel> Authors { get; set; }

        public DbSet<Genre> Genres { get; set; }

        /// <summary>
        /// Called when [configuring].
        /// </summary>
        /// <param name="builder">The builder.</param>
        /// <exception cref="ArgumentNullException">builder.</exception>
        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            if (!builder.IsConfigured)
            {
                builder.UseSqlServer(@"Server=DESKTOP-36GUPUH;Database=BookStoreManagementSystem;Integrated Security=True");
            }

            base.OnConfiguring(builder);
        }
    }
}
