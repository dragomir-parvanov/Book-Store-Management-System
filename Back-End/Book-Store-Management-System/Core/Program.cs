using Book_Store_Management_System_Data.Data;
using Book_Store_Management_System_Models.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Core
{
    class Program
    {
        static void Main(string[] args)
        {
            PopulateDatabase.Populate();
        }
    }
}
