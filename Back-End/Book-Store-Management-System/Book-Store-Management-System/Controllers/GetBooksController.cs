namespace Book_Store_Management_System.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web;
    using Book_Store_Management_System_Data.Models;
    using Book_Store_Management_System_Services.Services;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;

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

        // GET: api/GetBooks/5
        [HttpGet]
        public ActionResult<IEnumerable<IBookModel>> GetBooks(int id)
        {
            var books = this.getBooksByQueryService.GetBooks(this.Request.Query);
            return this.Ok(books);
        }
    }
}
