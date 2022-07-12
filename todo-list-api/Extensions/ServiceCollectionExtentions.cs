using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Hosting;
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
        }

        private static void RegisterServices(this IServiceCollection services)
        {
            services.TryAddScoped<IUsersService, UsersService>();
            services.TryAddScoped<IUsersRepository, UsersRepository>();
        }
    }
}
