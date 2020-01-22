namespace Book_Store_Management_System_Models.Data
{
    using Book_Store_Management_System_Models.Data.Constants;
    using System;
    using System.ComponentModel.DataAnnotations;

    /// <summary>
    /// Interface representing a book that we sell.
    /// </summary>
    public interface IBookModel : IIdentifiable
    {
        /// <summary>
        /// Gets the authors of the book.
        /// </summary>
        AuthorModel Author { get; }

        /// <summary>
        /// Gets the genres of the book.
        /// </summary>
        GenreModel Genre { get; }

        /// <summary>
        /// Gets or sets the name of the book.
        /// </summary>
        [MaxLength(DataMaxLengthConstants.Name)]
        string Name { get; set; }

        /// <summary>
        ///  Gets or sets when the book was released.
        /// </summary>
        DateTime DateReleased { get; set; }

        /// <summary>
        /// Gets or sets the price that the custumer pays.
        /// </summary>
        decimal RetailPrice { get; set; }

        /// <summary>
        /// Gets or sets the price that we pay for the book.
        /// </summary>
        decimal SupplyPrice { get; set; }

        /// <summary>
        /// Gets or sets the profit that we are making for a single purchase.
        /// </summary>
        decimal Profit { get; set; }

        /// <summary>
        /// Gets or sets the total profit we made from this book.
        /// </summary>
        decimal TotalProfit { get; set; }

        /// <summary>
        /// Gets or sets total amount of sales.
        /// </summary>
        int Sales { get; set; }
    }
}
