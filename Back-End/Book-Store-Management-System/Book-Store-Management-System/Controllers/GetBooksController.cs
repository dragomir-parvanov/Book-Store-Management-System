namespace Book_Store_Management_System.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web;
    using Book_Store_Management_System.Models;
    using Book_Store_Management_System_Data.Models;
    using Book_Store_Management_System_Services.Services;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Controller for getting books.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class GetBooksController : ControllerBase
    {
        private readonly IGetBooksByQueryService getBooksByQueryService;

        /// <summary>
        /// Initializes a new instance of the <see cref="GetBooksController"/> class.
        /// </summary>
        public GetBooksController(IGetBooksByQueryService getBooksByQueryService)
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
        public async Task<ActionResult<IEnumerable<IBookModel>>> GetBooks([FromQuery]GetBooksQueryModel query)
        {
            var books = await this.getBooksByQueryService.GetBooks(this.Request.Query).ConfigureAwait(false);
            return this.Ok(books);
        }
    }
}
