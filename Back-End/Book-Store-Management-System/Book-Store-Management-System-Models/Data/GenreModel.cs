namespace Book_Store_Management_System_Models.Data
{
    using Book_Store_Management_System_Models.Data.Constants;
    using System.ComponentModel.DataAnnotations;

    /// <inheritdoc/>
    public class GenreModel : IGenreModel
    {
        /// <inheritdoc/>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the name of the genre.
        /// </summary>
        [MaxLength(DataMaxLengthConstants.Name)]
        public string Name { get; set; }
    }
}
