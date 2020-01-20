using Book_Store_Management_System_Data.Data;
using Book_Store_Management_System_Data.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Core
{
    class Program
    {
        static void Main(string[] args)
        {
            using var dbContext = new ApplicationDbContext();
            var author = new AuthorModel
            {
                Name = "Drago4",
            };
            var authors = new List<AuthorModel>();
            authors.Add(author);
           
            var book = new BookModel
            {
               
                DateReleased = DateTime.Today,
                Sales = 0,
                SupplyPrice = 0,
                Authors = authors,
                Name = "Tales of Drago7",
                Profit = 0,
                RetailPrice = 0,
            };


            dbContext.Add(book);
            dbContext.SaveChanges();
        }
    }
}
