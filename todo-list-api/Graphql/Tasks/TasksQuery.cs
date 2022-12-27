using GraphQL;
using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;
using System;
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
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IntGraphType>>
                    {
                        Name = "idList",
                        Description = "Unique ID to localizate a List of Tasks"

                    },
                    new QueryArgument<NonNullGraphType<IntGraphType>>
                    {
                        Name = "idUser",
                        Description = "Unique User Id"

                    }
                ),
                resolve: Context =>
                {
                    var idList = Context.GetArgument<int>("idList");
                    int idUser = Context.GetArgument<int>("idUser");

                    var service = Context.RequestServices.GetRequiredService<ITasksService>();                    
                    return service.GetTaskAsync(idUser, idList);
                });
        }
    }
}
