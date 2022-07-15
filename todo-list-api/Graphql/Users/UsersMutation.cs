using System;
using GraphQL;
using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;
using todo_list_api.Services.Abstraction.Interfaces;
using todo_list_api.Utility;


namespace todo_list_api.Graphql.Users
{
    public class UsersMutation : ObjectGraphType
    {
        public UsersMutation()
        {
            Field<UsersType>(
                "createUser",
                 arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "createUser", Description = "Mutation to create a new User" }                    
                ),
                resolve: Context =>
                {
                    var name = Context.GetArgument<string>("name");
                    var email = Context.GetArgument<string>("email");
                    var password = Context.GetArgument<string>("password");

                    var user = new DTOs.UsersCreateDTO
                    {
                        IdUser = Utilities.GetNewUserID(),
                        Name = name,
                        Email = email,
                        Password = password,
                        DateCreate = DateTime.Now,
                        DateUpdate = DateTime.Now
                    };

                    var service = Context.RequestServices.GetRequiredService<IUsersService>();
                    service.CreateNewUserAsync(user);
                    return user;
                }
            );

        }
    }
}
