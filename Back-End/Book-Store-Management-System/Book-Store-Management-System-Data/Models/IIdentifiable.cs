namespace Book_Store_Management_System_Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    /// <summary>
    /// The identification of the database.
    /// </summary>
    public interface IIdentifiable
    {
        /// <summary>
        /// The database identifier.
        /// </summary>
        int Id { get; set; }
    }
}
