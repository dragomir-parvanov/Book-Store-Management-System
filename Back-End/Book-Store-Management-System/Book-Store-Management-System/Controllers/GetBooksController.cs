using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Web;
namespace Book_Store_Management_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetBooksController : ControllerBase
    {

        // GET: api/GetBooks/5
        [HttpGet]
        public string GetBooks(int id)
        {
            Console.WriteLine(Request.Query["xml"].ToString());
            return "value";
        }
    }
}
