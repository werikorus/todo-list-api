using GraphQL.Types;

namespace todo_list_api.Graphql.Users
{
    public class UsersUpdateType : ObjectGraphType<Models.Users>
    {
        public UsersUpdateType()
        {
            Field(x => x.IdUser);
            Field(x => x.Name);
            Field(x => x.Password);
            Field(x => x.Email);
        }
    }
}
