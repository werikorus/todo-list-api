using GraphQL.Types;

namespace todo_list_api.Graphql.Users
{
    public class UsersType : ObjectGraphType<Models.Users>
    {
        public UsersType()
        {
            Field(x => x.IdUser);
            Field(x => x.Name);
            Field(x => x.Password);
            Field(x => x.Email);
            Field(x => x.DateCreate);
            Field(x => x.DateUpdate);
        }
    }
}
