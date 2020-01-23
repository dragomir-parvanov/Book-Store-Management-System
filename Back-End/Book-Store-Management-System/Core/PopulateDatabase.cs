using Book_Store_Management_System_Data.Data;
using Book_Store_Management_System_Models.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core
{
    public class PopulateDatabase
    {
        public static void Populate()
        {
            Random rnd = new Random();
            var options = new DbContextOptions<ApplicationDbContext>();
            using var context = new ApplicationDbContext(options);
            var authors = new List<AuthorModel>();
            var genres = new List<GenreModel>();
            var newBooks = new List<BookModel>();
            for(int i = 0; i < 15; i++)
            {
                authors.Add(new AuthorModel
                {
                    Name = rnd.Next(1, 500000).ToString()
                }); ;
            }
            for (int i = 0; i < 15; i++)
            {
                genres.Add(new GenreModel
                {
                    Name = rnd.Next(1, 500000).ToString()
                }); ;
            }

            

            
            for(int i = 0; i < 5000; i++)
            {
                newBooks.Add(new BookModel
                {
                    Profit = rnd.Next(1, 100),
                    Author = authors[rnd.Next(authors.Count)],
                    Genre = genres[rnd.Next(genres.Count)],
                    DateReleased = new DateTime(rnd.Next(1950, 2021), rnd.Next(1,12), rnd.Next(1,26)),
                    Name = rnd.Next(100000).ToString(),
                    RetailPrice = rnd.Next(15),
                    Sales = rnd.Next(1000),
                    SupplyPrice = rnd.Next(1000),
                    TotalProfit = rnd.Next(1000)
                });
            }
            context.Books.AddRange(newBooks);

            context.SaveChanges();
        }
    }
}
