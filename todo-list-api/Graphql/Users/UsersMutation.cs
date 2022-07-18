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
        }
    }
}
