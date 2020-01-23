using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Book_Store_Management_System_Services.Tools
{
    /// <summary>
    /// Used for combining 2 or more Expressions into one which is
    /// safe for EF Core to generate a single query
    /// </summary>
    /// Disclaimer!!! This is copied from StackOverflow(not from the question)
    /// author: Adam Tegen
    public static class PredicateBuilder
    {
        /// <summary>
        /// Chaining one expression to another with the && opeator.
        /// </summary>
        /// <typeparam name="T">The type which properties we will build the expression</typeparam>
        /// <param name="a">Prototyping Expression</param>
        /// <param name="b">The expression that is going to be chained</param>
        public static Expression<Func<T, bool>> And<T>(this Expression<Func<T, bool>> a, Expression<Func<T, bool>> b)
        {
            // if the first expression that we are prototyping is null, return the second.
            // We use this in GetBooksByQueryService.
            if (a == null)
            {
                return b;
            }

            ParameterExpression p = a.Parameters[0];

            SubstExpressionVisitor visitor = new SubstExpressionVisitor();
            visitor.subst[b.Parameters[0]] = p;

            Expression body = Expression.AndAlso(a.Body, visitor.Visit(b.Body));
            return Expression.Lambda<Func<T, bool>>(body, p);
        }

        /// <summary>
        /// Chaining one expression to another with the || opeator
        /// </summary>
        /// <typeparam name="T">The type which properties we will build the expression</typeparam>
        /// <param name="a">Prototyping Expression</param>
        /// <param name="b">The expression that is going to be chained</param>
        public static Expression<Func<T, bool>> Or<T>(this Expression<Func<T, bool>> a, Expression<Func<T, bool>> b)
        {

            ParameterExpression p = a.Parameters[0];

            SubstExpressionVisitor visitor = new SubstExpressionVisitor();
            visitor.subst[b.Parameters[0]] = p;

            Expression body = Expression.OrElse(a.Body, visitor.Visit(b.Body));
            return Expression.Lambda<Func<T, bool>>(body, p);
        }
    }

    internal class SubstExpressionVisitor : System.Linq.Expressions.ExpressionVisitor
    {
        public Dictionary<Expression, Expression> subst = new Dictionary<Expression, Expression>();

        protected override Expression VisitParameter(ParameterExpression node)
        {
            Expression newValue;
            if (subst.TryGetValue(node, out newValue))
            {
                return newValue;
            }
            return node;
        }
    }
}
