using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using todo_list_api.Services.Abstraction.Interfaces;

namespace todo_list_api.Graphql.Users
{
    public class UsersQuery : ObjectGraphType
    {
        public UsersQuery()
        {
            Field<ListGraphType<UsersType>>("users", resolve: Context =>
            {
                var service = Context.RequestServices.GetRequiredService<IUsersService>();
                return service.GetAllUsersAsync();               
            });


            Field<ListGraphType<UsersType>>("user", resolve: Context =>
            {
                var service = Context.RequestServices.GetRequiredService<IUsersService>();
                return service.GetUserAsync(1);
            });
        }
    }
}
