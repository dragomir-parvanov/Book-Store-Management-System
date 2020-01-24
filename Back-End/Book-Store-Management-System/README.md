ASP.NET, Entity Framework, Dependency Injection

The query for the sql server is built by combining one or more "Expression"s and then applying sortings.
It is meant that the services can interprete a dynamic url query with one or many parameters into a single sql query.

The solution consists of 5 projects.

## Book-Store-Management-System
ASP.NET Core project.

## Book-Store-Management-System-Services
.NET Standart project which contains the database services and PredicateBuilder tool.

## Book-Store-Management-System-Models
.NET Standart project which contains all models and constants

## Book-Store-Management-System-Data
.NET Standart project which contains the database context and its configuration.

## Core
.NET Core project used for testing and populating the database.
