namespace Book_Store_Management_System_Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Text;

    /// <summary>
    /// How a book genre should be represented in the database.
    /// </summary>
    public class GenreModel: IIdentifiable
    {
        /// <inheritdoc/>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the name of the genre.
        /// </summary>
        public string Name { get; set; }
    }
}
