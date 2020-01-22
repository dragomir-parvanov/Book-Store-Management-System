namespace Book_Store_Management_System_Data.Data
{
    using System;
    using Book_Store_Management_System_Models.Data;
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// The context of the database.
    /// </summary>
    public class ApplicationDbContext : DbContext
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApplicationDbContext"/> class.
        /// </summary>
        /// <param name="options">The options.</param>
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        { }

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
                builder.UseSqlServer(@"Server=DESKTOP-36GUPUH;Database=BookStoreManagementSystemTest2;Integrated Security=True");
            }

            base.OnConfiguring(builder);
        }
    }
}
