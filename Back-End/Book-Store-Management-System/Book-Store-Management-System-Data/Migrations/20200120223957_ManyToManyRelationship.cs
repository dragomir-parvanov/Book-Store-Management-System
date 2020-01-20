using Microsoft.EntityFrameworkCore.Migrations;

namespace Book_Store_Management_System_Data.Migrations
{
    public partial class ManyToManyRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Authors_Books_BookModelId",
                table: "Authors");

            migrationBuilder.DropIndex(
                name: "IX_Authors_BookModelId",
                table: "Authors");

            migrationBuilder.DropColumn(
                name: "BookModelId",
                table: "Authors");

            migrationBuilder.AddColumn<int>(
                name: "BooksId",
                table: "Authors",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Authors_BooksId",
                table: "Authors",
                column: "BooksId");

            migrationBuilder.AddForeignKey(
                name: "FK_Authors_Books_BooksId",
                table: "Authors",
                column: "BooksId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Authors_Books_BooksId",
                table: "Authors");

            migrationBuilder.DropIndex(
                name: "IX_Authors_BooksId",
                table: "Authors");

            migrationBuilder.DropColumn(
                name: "BooksId",
                table: "Authors");

            migrationBuilder.AddColumn<int>(
                name: "BookModelId",
                table: "Authors",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Authors_BookModelId",
                table: "Authors",
                column: "BookModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Authors_Books_BookModelId",
                table: "Authors",
                column: "BookModelId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
