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
                    var service = Context.RequestServices.GetRequiredService<ITasksService>();
                    return service.GetAllTasksAsync(); 
                });
           
            Field<TasksType>(
                "Task",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IntGraphType>>
                    {
                        Name = "idList",
                        Description = "Unique ID to localizate a List of Tasks"
                    }),
                resolve: Context =>
                {                    
                    var idList = Context.GetArgument<int>("idList");                    
                    int idUser = 1;

                    var service = Context.RequestServices.GetRequiredService<ITasksService>();                    
                    return service.GetTaskAsync(idUser, idList);
                });
        }
    }
}
