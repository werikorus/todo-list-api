using System;
using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;

namespace todo_list_api.Graphql.Tasks
{
    public class TasksSchema : Schema
    {
        public TasksSchema(IServiceProvider serviceProvider) : base(serviceProvider)
        {
            Query = serviceProvider.GetRequiredService<TasksQuery>();
            Mutation = serviceProvider.GetRequiredService<TasksMutation>();
        }
    }
}
