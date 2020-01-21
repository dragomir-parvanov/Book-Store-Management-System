namespace Book_Store_Management_System_Services.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq.Expressions;
    using Book_Store_Management_System_Data.Data;
    using Book_Store_Management_System_Data.Models;
    using Book_Store_Management_System_Services.Tools;
    using Microsoft.AspNetCore.Http;

    /// <inheritdoc/>
    public class GetBooksByQueryService : DbContextService, IGetBooksByQueryService
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetBooksByQueryService"/> class.
        /// Used for dependency injection.
        /// </summary>
        /// <param name="dbContext"></param>
        public GetBooksByQueryService(ApplicationDbContext dbContext)
            : base(dbContext)
        {
        }

        /// <inheritdoc/>
        public IEnumerable<BookModel> GetBooks(IQueryCollection query)
        {
            Expression<Func<BookModel, bool>> expr1 = b => b.Profit < 5;

            Expression<Func<BookModel, bool>> expr2 = b => b.Profit > 0;

            expr1 = expr1.And(expr2);

        }
    }
}
