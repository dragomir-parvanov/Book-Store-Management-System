namespace Book_Store_Management_System_Models.Data
{
    using Book_Store_Management_System_Models.Data.Constants;
    using System.ComponentModel.DataAnnotations;

    /// <inheritdoc/>
    public class AuthorModel : IAuthorModel
    {
        /// <inheritdoc/>
        [Key]
        public int Id { get; set; }

        /// <inheritdoc/>
        [MaxLength(DataMaxLengthConstants.Name)]
        public string Name { get; set; }
    }
}
