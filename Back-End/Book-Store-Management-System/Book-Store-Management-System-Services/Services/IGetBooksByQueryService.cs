namespace Book_Store_Management_System_Services.Services
{
    using System.Collections.Generic;
    using Book_Store_Management_System_Data.Models;
    using Microsoft.AspNetCore.Http;

    /// <summary>
    /// A service for getting books from the database.
    /// </summary>
    public interface IGetBooksByQueryService
    {
        /// <summary>
        /// Getting all books by the query from the database.
        /// </summary>
        /// <param name="query">The url query that is coming from the request.</param>
        IEnumerable<IBookModel> GetBooks(IQueryCollection query);
    }
}
