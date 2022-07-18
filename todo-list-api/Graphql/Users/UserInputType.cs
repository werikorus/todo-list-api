using GraphQL.Types;

namespace todo_list_api.Graphql.Users
{
    public class UserInputType : InputObjectGraphType<DTOs.UsersCreateDTO>
    {
        public UserInputType()
        {
            Name = "userInput";
            Field(x => x.IdUser);
            Field(x => x.Name);
            Field(x => x.Password);
            Field(x => x.Email);
            Field(x => x.DateCreate);
            Field(x => x.DateUpdate);
        }
    }
}
