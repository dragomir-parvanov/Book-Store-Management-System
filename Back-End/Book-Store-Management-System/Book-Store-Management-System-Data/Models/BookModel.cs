﻿namespace Book_Store_Management_System_Data.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Runtime.Serialization;
    using System.Text;

    /// <inheritdoc/>
    [DataContract]
    public class BookModel : IBookModel
    {
        /// <inheritdoc/>
        [Key]
        public int Id { get; set; }

        /// <inheritdoc/>
        [Required]
        public AuthorModel Author { get; set; }

        /// <inheritdoc/>
        [Required]
        public GenreModel Genre { get; set; }

        /// <inheritdoc/>
        [Required]
        public string Name { get; set; }

        /// <inheritdoc/>
        public DateTime DateReleased { get; set; }

        /// <inheritdoc/>
        public decimal RetailPrice { get; set; }

        /// <inheritdoc/>
        public decimal SupplyPrice { get; set; }

        /// <inheritdoc/>
        public decimal Profit { get; set; }

        /// <inheritdoc/>
        public int Sales { get; set; }
    }
}
