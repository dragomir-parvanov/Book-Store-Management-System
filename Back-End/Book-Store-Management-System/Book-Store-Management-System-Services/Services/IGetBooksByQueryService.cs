namespace Book_Store_Management_System_Services.Services
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Book_Store_Management_System_Models;
    using Book_Store_Management_System_Models.Data;

    /// <summary>
    /// A service for getting books from the database.
    /// </summary>
    public interface IGetBooksByQueryService
    {
        /// <summary>
        /// Getting all books by the query from the database.
        /// </summary>
        /// <param name="query">The url query that is coming from the request.</param>
        /// <returns>A <see cref="ActionResult"/> representing the asynchronous operation.</returns>
        Task<IEnumerable<IBookModel>> GetBooks(GetBooksQueryModel query);
    }
}
