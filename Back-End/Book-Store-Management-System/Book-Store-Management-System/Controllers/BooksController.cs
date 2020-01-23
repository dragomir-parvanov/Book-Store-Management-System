namespace Book_Store_Management_System.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web;
    using Book_Store_Management_System_Models;
    using Book_Store_Management_System_Models.Data;
    using Book_Store_Management_System_Services.Services;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Controller for getting books.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IGetBooksByQueryService getBooksByQueryService;

        /// <summary>
        /// Initializes a new instance of the <see cref="BooksController"/> class.
        /// </summary>
        public BooksController(IGetBooksByQueryService getBooksByQueryService)
        {
            this.getBooksByQueryService = getBooksByQueryService
                ?? throw new ArgumentNullException(nameof(getBooksByQueryService));
        }

        /// <summary>
        /// Getting books from the database.
        /// usage: api/books/?query .
        /// </summary>
        /// <returns>Books json.</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<IBookModel>>> Books([FromQuery]GetBooksQueryModel query)
        {
            Console.WriteLine(query.ProfitOrderByAscending);
            var books = await this.getBooksByQueryService.GetBooks(query).ConfigureAwait(false);
            return this.Ok(books);
        }
    }
}
