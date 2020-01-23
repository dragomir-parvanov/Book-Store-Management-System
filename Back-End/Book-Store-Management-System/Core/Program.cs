using Book_Store_Management_System_Data.Data;
using Book_Store_Management_System_Models.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Core
{
    class Program
    {
        static void Main(string[] args)
        {
            var options = new DbContextOptions<ApplicationDbContext>();
            using var dbContext = new ApplicationDbContext(options);
            var items = new List<BookModel>();
            var book = new BookModel
            {
                Author = new AuthorModel { Name = "bsd" }
            };

            items.Add(book);
            
            Expression<Func<BookModel, bool>> expr1 = (b => b.Profit < 5);

            Expression<Func<BookModel, bool>> expr2 = b => b.Profit>0 ;
            
           // Console.WriteLine(dbContext.Books.Where(b=> b.Profit<5 && b.Profit>0).ToList().Count);


        }
        private static Func<BookModel, bool> CombineFunc(Func<BookModel, bool> first, Func<BookModel, bool> second)
        {
            Func<BookModel, bool> combinedFunctions = (b => first(b) || second(b));


            return combinedFunctions;
        }
        private static IQueryable<BookModel> CombineQueryable(IQueryable first, IQueryable second)
        {
            throw new NotImplementedException();
        }
    }
}
