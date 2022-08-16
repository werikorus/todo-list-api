using GraphQL.Types;

namespace todo_list_api.Graphql.Tasks
{
    public class TasksType : InputObjectGraphType<Models.Tasks>
    {
        public TasksType()
        {
            Name = "TasksType";
            Field(x => x.Idtask);
            Field(x => x.Idlist);
            Field(x => x.DescriptionTask);
            Field(x => x.Done);           
        }
    }
}
