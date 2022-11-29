using GraphQL.MicrosoftDI;
using GraphQL.Types;
using GraphQL.Server;
using GraphQL.SystemTextJson;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Hosting;
using todo_list_api.Graphql.Users;
using todo_list_api.Graphql.Tasks;
using todo_list_api.Interfaces;
using todo_list_api.Repository;
using todo_list_api.Services;
using todo_list_api.Services.Abstraction.Interfaces;

namespace todo_list_api.Extensions
{
    public  static class ServiceCollectionExtentions
    {
        public static void ConfigureServices(this IServiceCollection services,
            IConfiguration configuration,
            IHostEnvironment environment)
        {
            services.RegisterServices();
            services.RegisterGraphQLStuffs();
        }

        private static void RegisterServices(this IServiceCollection services)
        {
            services.TryAddScoped<IUsersService, UsersService>();
            services.TryAddScoped<IUsersRepository, UsersRepository>();

            services.TryAddScoped<ITasksService, TasksService>();
            services.TryAddScoped<ITasksRepository, TasksRepository>();
        }

        private static void RegisterGraphQLStuffs(this IServiceCollection services)
        {
            services.AddSingleton<ISchema, UsersSchema>(services => new UsersSchema(new SelfActivatingServiceProvider(services)));
            services.AddSingleton<ISchema, TasksSchema>(services => new TasksSchema(new SelfActivatingServiceProvider(services)));
            

            services.AddGraphQL(options =>
            {
                options.EnableMetrics = true;
            }).AddSystemTextJson();
        }
    }
}
