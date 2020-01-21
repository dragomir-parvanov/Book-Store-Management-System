namespace Book_Store_Management_System_Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Text;

    /// <summary>
    /// How an author should be presented in the database.
    /// </summary>
    public class AuthorModel : IIdentifiable
    {
        /// <inheritdoc/>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the name of the author.
        /// </summary>
        public string Name { get; set; }

        public virtual ICollection<BookModel> Books { get; set; }
    }
}
