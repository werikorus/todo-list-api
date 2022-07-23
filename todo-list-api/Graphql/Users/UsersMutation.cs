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
                    new QueryArgument<NonNullGraphType<UserInputType>> 
                    { 
                        Name = "userInput", 
                        Description = "User Object to create new register." 
                    }),
                resolve: Context =>
                {
                    var user = Context.GetArgument<DTOs.UsersCreateDTO>("userInput");                    
                    var service = Context.RequestServices.GetRequiredService<IUsersService>();
                    return service.CreateNewUserAsync(user);                    
                }
            );

            Field<UsersUpdateType>(
                "updateUser",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<UserInputUpdateType>> { Name = "userInput" },
                    new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "UserId" }),
                resolve: Context =>
                {
                    var userObject = Context.GetArgument<DTOs.UsersUpdateDTO>("userInput");
                    var userId = Context.GetArgument<int>("userId");

                    var service = Context.RequestServices.GetRequiredService<IUsersService>();
                    var user = service.GetUserAsync(userId);

                    if (user == null)
                    {
                        Context.Errors.Add(new ExecutionError("Coundn't find the User in database!"));
                        return null;
                    }

                    return service.UpdateUserAsync(userObject, userId);
                }
            );

            Field<StringGraphType>(
                "deleteUser",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IntGraphType>>{ Name = "UserId" }),
                resolve: Context =>
                {
                    var userId = Context.GetArgument<int>("UserId");
                    var service = Context.RequestServices.GetRequiredService<IUsersService>();
                    return service.DeleteUserAsync(userId);
                }
            );
        }
    }
}
