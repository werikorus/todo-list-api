using GraphQL;
using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;
using todo_list_api.Services.Abstraction.Interfaces;


namespace todo_list_api.Graphql.Tasks
{
    public class TasksQuery : ObjectGraphType
    {
        public TasksQuery()
        {
            Field<ListGraphType<TasksType>>(
                "Tasks",
                resolve: Context =>
                {
                    var service = Context.RequestServices.GetService<ITasksService>();
                    return service.GetAllTasksAsync();
                });

            Field<TasksType>(
                "Task",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IntGraphType>>
                    {
                        Name = "idTask",
                        Description = "Unique ID to localizate a Task"
                    }),
                resolve: Context =>
                {
                    var idTask = Context.GetArgument<int>("idTask");
                    var idList = Context.GetArgument<int>("idList");
                    return null;
                });
        }
    }
}
