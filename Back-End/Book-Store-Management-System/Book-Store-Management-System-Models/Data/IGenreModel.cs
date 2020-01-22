namespace Book_Store_Management_System_Models.Data
{
    /// <summary>
    /// How a book's genre should be represented in the database.
    /// </summary>
    public interface IGenreModel : IIdentifiable
    {
        /// <summary>
        /// Gets or sets the name of the genre.
        /// </summary>
        string Name { get; set; }
    }
}
