namespace Book_Store_Management_System_Services.Services
{
    using System;
    using Book_Store_Management_System_Data.Data;

    /// <summary>
    /// All services which have access to the database context.
    /// </summary>
    public class DbContextService
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DbContextService"/> class.
        /// Dependency injecting DbContext.
        /// </summary>
        /// <param name="dbContext">The database context</param>
        protected DbContextService(ApplicationDbContext dbContext)
        {
            this.DbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
         }

        /// <summary>
        /// Gets the application database context.
        /// </summary>
        /// <value>The application database context.</value>
        private protected ApplicationDbContext DbContext { get; }
    }
}
