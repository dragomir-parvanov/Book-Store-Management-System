namespace Book_Store_Management_System_Services.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Linq.Expressions;
    using System.Threading.Tasks;
    using Book_Store_Management_System_Data.Data;
    using Book_Store_Management_System_Models;
    using Book_Store_Management_System_Models.Data;
    using Book_Store_Management_System_Services.Tools;
    using Microsoft.EntityFrameworkCore;

    /// <inheritdoc/>
    public class GetBooksByQueryService : DbContextService, IGetBooksByQueryService
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetBooksByQueryService"/> class.
        /// Used for dependency injection.
        /// </summary>
        /// <param name="dbContext">dependency injection for dbContext.</param>
        public GetBooksByQueryService(ApplicationDbContext dbContext)
            : base(dbContext)
        {
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<IBookModel>> GetBooks(GetBooksQueryModel query)
        {
            if (query == null)
            {
                throw new ArgumentNullException(nameof(query));
            }

            IQueryable<BookModel> sqlQuery = this.DbContext.Books;

            var whereExpression = BuildWhereExpression(query);
            if (whereExpression != null)
            {
                sqlQuery = sqlQuery.Where(whereExpression);
            }

            sqlQuery = ApplySortings(sqlQuery, query);

            var limit = query.Limit ?? 10;

            var books = await sqlQuery.Include(b => b.Author)
                .Include(b => b.Genre).Take(limit).AsNoTracking()
                .ToListAsync().ConfigureAwait(false);
            return books;
        }

        /// <summary>
        /// Building the where expression.
        /// </summary>
        /// <param name="query">The url query.</param>
        /// <returns>An expression which is safe for Entity framework to evaluate.</returns>
        private static Expression<Func<BookModel, bool>> BuildWhereExpression(GetBooksQueryModel query)
        {
            Expression<Func<BookModel, bool>> whereExpression = null;

            if (!string.IsNullOrWhiteSpace(query.AuthorsIds))
            {
                var authorsIds = query.AuthorsIds.Split(',').Select(id => int.Parse(id));

                Expression<Func<BookModel, bool>> authorsExpression = b => authorsIds.Contains(b.Author.Id);
                whereExpression = whereExpression.And(authorsExpression);
            }

            if (!string.IsNullOrWhiteSpace(query.GenresIds))
            {
                var genresIds = query.GenresIds.Split(',').Select(id => int.Parse(id));

                Expression<Func<BookModel, bool>> genresExpression = b => genresIds.Contains(b.Genre.Id);
                whereExpression = whereExpression.And(genresExpression);
            }

            if (query.FromYear != null && query.FromMonth != null && query.FromDate != null)
            {
                var fromDate = new DateTime(
                    query.FromYear ?? default,
                    query.FromMonth ?? default,
                    query.FromDate ?? default);

                Expression<Func<BookModel, bool>> fromDateExpression = b => b.DateReleased >= fromDate;
                whereExpression = whereExpression.And(fromDateExpression);
            }

            if (query.ToYear != null && query.ToMonth != null && query.ToDate != null)
            {
                var toDate = new DateTime(
                    query.ToYear ?? default,
                    query.ToMonth ?? default,
                    query.ToDate ?? default);

                Expression<Func<BookModel, bool>> toDateExpression = b => b.DateReleased <= toDate;
                whereExpression = whereExpression.And(toDateExpression);
            }

            return whereExpression;
        }

        /// <summary>
        /// Applying any sortings from the url query.
        /// </summary>
        /// <param name="sqlQuery">The sql query.</param>
        /// <param name="query">The url query.</param>
        /// <returns>An query where sortings are applied.</returns>
        private static IQueryable<BookModel> ApplySortings(IQueryable<BookModel> sqlQuery, GetBooksQueryModel query)
        {
            if (query.ProfitOrderByAscending != null)
            {
                if (query.ProfitOrderByAscending == true)
                {
                    return sqlQuery.OrderBy(b => b.Profit);
                }
                else
                {
                    return sqlQuery.OrderByDescending(b => b.Profit);
                }
            }

            if (query.RetailPriceOrderByAscending != null)
            {
                if (query.RetailPriceOrderByAscending == true)
                {
                    return sqlQuery.OrderBy(b => b.RetailPrice);
                }
                else
                {
                    return sqlQuery.OrderByDescending(b => b.RetailPrice);
                }
            }

            if (query.SupplyPriceOrderByAscending != null)
            {
                if (query.SupplyPriceOrderByAscending == true)
                {
                    return sqlQuery.OrderBy(b => b.SupplyPrice);
                }
                else
                {
                    return sqlQuery.OrderByDescending(b => b.SupplyPrice);
                }
            }

            if (query.TotalProfitOrderByAscending != null)
            {
                if (query.TotalProfitOrderByAscending == true)
                {
                    return sqlQuery.OrderBy(b => b.TotalProfit);
                }
                else
                {
                    return sqlQuery.OrderByDescending(b => b.TotalProfit);
                }
            }

            // no sortings were applied.
            return sqlQuery;
        }
    }
}
