namespace Book_Store_Management_System_Data.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Runtime.Serialization;

    /// <inheritdoc/>
    [DataContract]
    public class AuthorModel : IAuthorModel
    {
        /// <inheritdoc/>
        [DataMember]
        public int Id { get; set; }

        /// <inheritdoc/>
        [DataMember]
        public string Name { get; set; }

        /// <inheritdoc/>
        public virtual ICollection<BookModel> Books { get; set; }
    }
}
