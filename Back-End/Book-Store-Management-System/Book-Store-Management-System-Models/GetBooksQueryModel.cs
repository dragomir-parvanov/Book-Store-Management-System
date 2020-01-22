using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Book_Store_Management_System_Models
{
    public class GetBooksQueryModel
    {
#nullable enable
        public string? QueryId { get; set; }
        public string? Ids { get; set; }

        public string? GenresIds { get; set; }

        public string? AuthorsIds { get; set; }
#nullable disable

        public int? Limit { get; set; }

        public int? FromYear { get; set; }

        public int? FromMonth { get; set; }

        public int? FromDate { get; set; }

        public int? ToYear { get; set; }

        public int? ToMonth { get; set; }

        public int? ToDate { get; set; }

        public bool? ProfitOrderByAscending { get; set; }

        public bool? RetailPriceOrderByAscending { get; set; }

        public bool? SupplyPriceOrderByAscending { get; set; }

        public bool? TotalProfitOrderByAscending { get; set; }

    }
}
