using System;
using GraphQL;
using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;
using todo_list_api.Services.Abstraction.Interfaces;


namespace todo_list_api.Graphql.Users
{
    public class UsersMutation : ObjectGraphType
    {
        public UsersMutation()
        {
            Field<UsersType>(
                "createUser",
                 arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "message" }
                ),
                resolve: Context =>
                {
                    var name = Context.GetArgument<string>("message");
                    var service = Context.RequestServices.GetRequiredService<IUsersService>();
                    
                    var user = new DTOs.UsersCreateDTO
                    {
                        IdUser = 3,
                        Name = name,
                        DateCreate = DateTime.Now,
                        DateUpdate = DateTime.Now
                    };

                    service.CreateNewUserAsync(user);
                    return user;
                }
            );

        }
    }
}
