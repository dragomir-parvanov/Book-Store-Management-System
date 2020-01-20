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
        /// <summary>
        /// Gets or sets the books in the database.
        /// </summary>
        public DbSet<BookModel> Books { get; set; }

        /// <summary>
        /// Gets or sets the authors in the database.
        /// </summary>
        public DbSet<AuthorModel> Authors { get; set; }

        /// <summary>
        /// Gets or sets the genres in the database.
        /// </summary>
        public DbSet<GenreModel> Genres { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
        }

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

            builder.UseSqlServer(@"Server=DESKTOP-36GUPUH;Database=BookStoreManagementSystemTest;Integrated Security=True");
        }
    }
}
