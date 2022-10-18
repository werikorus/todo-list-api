using GraphQL;
using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;
using todo_list_api.Services.Abstraction.Interfaces;

namespace todo_list_api.Graphql.Users
{
    public class UsersQuery : ObjectGraphType
    {
        public UsersQuery()
        {
            Field<ListGraphType<UsersType>>(
                "users",
                resolve: Context =>
                {
                    var service = Context.RequestServices.GetRequiredService<IUsersService>();
                    return service.GetAllUsersAsync();
                });

            Field<UsersType>(
                "user",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IntGraphType>>
                {
                    Name = "idUser",
                    Description = "Unique ID to localizate the user"
                }),
                resolve: Context =>
                {
                    var idUser = Context.GetArgument<int>("idUser");
                    var service = Context.RequestServices.GetRequiredService<IUsersService>();
                    return service.GetUserAsync(idUser);
                });
        }
    }
}