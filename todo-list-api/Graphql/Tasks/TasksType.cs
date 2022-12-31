using GraphQL.Types;

namespace todo_list_api.Graphql.Tasks
{
    public class TasksType : ObjectGraphType<Models.Tasks>
    {
        public TasksType()
        {            
            Field(x => x.Idtask);
            Field(x => x.Idlist);
            Field(x => x.DescriptionTask);            
            Field(x => x.Done);
            Field(x => x.IdUser);
        }
    }
}
