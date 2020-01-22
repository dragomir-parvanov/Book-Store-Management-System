﻿namespace Book_Store_Management_System_Data.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Runtime.Serialization;

    /// <inheritdoc/>
    [DataContract]
    public class GenreModel : IIdentifiable
    {
        /// <inheritdoc/>
        [Key]
        [DataMember]
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the name of the genre.
        /// </summary>
        [DataMember]
        public string Name { get; set; }

        /// <summary>
        /// The books that belongs to that genre.
        /// </summary>
        public ICollection<BookModel> Books { get; set; }
    }
}
