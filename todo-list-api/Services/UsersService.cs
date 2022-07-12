using System.Collections.Generic;
using System.Threading.Tasks;
using todo_list_api.Models;
using todo_list_api.Services.Abstraction.Interfaces;
using todo_list_api.Interfaces;
using System;
using Microsoft.Extensions.DependencyInjection;

namespace todo_list_api.Services
{
    public class UsersService : IUsersService
    {
        private readonly IUsersRepository _usersRepository;

        public UsersService(IServiceProvider serviceProvider)
        {
            _usersRepository = serviceProvider.GetRequiredService<IUsersRepository>();
        }

        public async Task<IEnumerable<Users>> GetAllUsersAsync()
        {
            var users = await _usersRepository.GetUsers();
            return users;
        }

        public async Task<Users> GetUserAsync(int id)
        {
            var user = await _usersRepository.GetUser(id);
            return user;
        }
    }
}
