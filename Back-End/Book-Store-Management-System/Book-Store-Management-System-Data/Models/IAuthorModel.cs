using System;
using System.Collections.Generic;
using System.Text;

namespace Book_Store_Management_System_Data.Models
{
    /// <summary>
    /// How an author should be presented in the database.
    /// </summary>
    public interface IAuthorModel : IIdentifiable
    {
        /// <summary>
        /// Gets or sets the name of the author.
        /// </summary>
        string Name { get; set; }

        /// <summary>
        /// Gets or sets navigation property.
        /// </summary>
        ICollection<BookModel> Books { get; set; }
    }
}
