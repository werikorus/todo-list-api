using GraphQL.Types;

namespace todo_list_api.Graphql.Tasks
{
    public class TasksInputType : InputObjectGraphType<DTOs.TasksCreateDTO>
    {
        public TasksInputType()
        {
            Name = "TaskInput";
            Field(x => x.Idtask);
            Field(x => x.Idlist);
            Field(x => x.DescriptionTask);
            Field(x => x.Done);           
        }
    }
}
