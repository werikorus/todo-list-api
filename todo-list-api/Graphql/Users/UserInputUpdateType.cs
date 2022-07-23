using GraphQL.Types;

namespace todo_list_api.Graphql.Users
{
    public class UserInputUpdateType : InputObjectGraphType<DTOs.UsersUpdateDTO>
    {
        public UserInputUpdateType()
        {
            Name = "userUpdateInput";
            Field(x => x.IdUser);
            Field(x => x.Name);
            Field(x => x.Password);
            Field(x => x.Email);            
        }
    }
}
