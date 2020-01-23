namespace Book_Store_Management_System_Models.Data
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
    }
}
