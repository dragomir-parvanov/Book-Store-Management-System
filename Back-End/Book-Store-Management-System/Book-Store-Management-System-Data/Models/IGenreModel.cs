﻿namespace Book_Store_Management_System_Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.Runtime.Serialization;
    using System.Text;

    /// <summary>
    /// How a book's genre should be represented in the database.
    /// </summary>
    public interface IGenreModel : IIdentifiable
    {
        /// <summary>
        /// Gets or sets the name of the genre.
        /// </summary>
        string Name { get; set; }

        /// <summary>
        /// The navigation property.
        /// </summary>
        ICollection<BookModel> Books { get; set; }
    }
}
