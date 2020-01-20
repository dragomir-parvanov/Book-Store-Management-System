﻿// <auto-generated />
using System;
using Book_Store_Management_System_Data.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Book_Store_Management_System_Data.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20200120223957_ManyToManyRelationship")]
    partial class ManyToManyRelationship
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Book_Store_Management_System_Data.Models.AuthorModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("BooksId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("BooksId");

                    b.ToTable("Authors");
                });

            modelBuilder.Entity("Book_Store_Management_System_Data.Models.BookModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateReleased")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Profit")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("RetailPrice")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("Sales")
                        .HasColumnType("int");

                    b.Property<decimal>("SupplyPrice")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("Id");

                    b.ToTable("Books");
                });

            modelBuilder.Entity("Book_Store_Management_System_Data.Models.GenreModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("BookModelId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("BookModelId");

                    b.ToTable("Genres");
                });

            modelBuilder.Entity("Book_Store_Management_System_Data.Models.AuthorModel", b =>
                {
                    b.HasOne("Book_Store_Management_System_Data.Models.BookModel", "Books")
                        .WithMany("Authors")
                        .HasForeignKey("BooksId");
                });

            modelBuilder.Entity("Book_Store_Management_System_Data.Models.GenreModel", b =>
                {
                    b.HasOne("Book_Store_Management_System_Data.Models.BookModel", null)
                        .WithMany("Genres")
                        .HasForeignKey("BookModelId");
                });
#pragma warning restore 612, 618
        }
    }
}
