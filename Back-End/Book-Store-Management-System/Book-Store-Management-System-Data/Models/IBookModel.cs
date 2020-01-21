namespace Book_Store_Management_System_Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    /// <summary>
    /// Interface representing a book that we sell.
    /// </summary>
    public interface IBookModel : IIdentifiable
    {
        /// <summary>
        /// Gets the authors of the book.
        /// </summary>
        public AuthorModel Author { get; }

        /// <summary>
        /// Gets the genres of the book.
        /// </summary>
        public GenreModel Genre { get; }

        /// <summary>
        /// Gets or sets the name of the book.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        ///  Gets or sets when the book was released.
        /// </summary>
        public DateTime DateReleased { get; set; }

        /// <summary>
        /// Gets or sets the price that the custumer pays.
        /// </summary>
        public decimal RetailPrice { get; set; }

        /// <summary>
        /// Gets or sets the price that we pay for the book.
        /// </summary>
        public decimal SupplyPrice { get; set; }

        /// <summary>
        /// Gets or sets the profit that we are making for a single purchase.
        /// </summary>
        public decimal Profit { get; set; }

        /// <summary>
        /// Gets or sets total amount of sales.
        /// </summary>
        public int Sales { get; set; }


    }
}
