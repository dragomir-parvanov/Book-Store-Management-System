namespace Book_Store_Management_System_Services.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Linq.Expressions;
    using System.Threading.Tasks;
    using Book_Store_Management_System_Data.Data;
    using Book_Store_Management_System_Data.Models;
    using Book_Store_Management_System_Services.Tools;
    using Microsoft.EntityFrameworkCore;

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
        public async Task<IEnumerable<IBookModel>> GetBooks( query)
        {
            if (query == null)
            {
                throw new ArgumentNullException(nameof(query));
            }

            Expression<Func<BookModel, bool>> expr1 = b => b.Profit < 5;

            Expression<Func<BookModel, bool>> expr2 = b => b.Profit > 0;
            var books = await this.DbContext.Books.Where(expr1.And(expr2)).Include(b => b.Author)
                .Include(b => b.Genre).Take(10).AsNoTracking().ToListAsync().ConfigureAwait(false);
            return books;
        }
    }
}
