using System.Collections.Generic;
using System.Threading.Tasks;
using todo_list_api.Models;
using todo_list_api.Services.Abstraction.Interfaces;
using todo_list_api.Interfaces;
using System;
using Microsoft.Extensions.DependencyInjection;
using todo_list_api.DTOs;

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
            return await _usersRepository.GetUsers(); ;
        }

        public async Task<Users> GetUserAsync(int id)
        {
            return await _usersRepository.GetUser(id); ;
        }

        public Users CreateNewUserAsync(UsersCreateDTO requisition)
        {            
            return _usersRepository.CreateNewUser(requisition); ;             
        }

        public int GenerateNewUserID()
        {
            return 0;
        }

        public Task<Users> UpdateUserAsync(UsersUpdateDTO userInput, int IdUser)
        {
            return _usersRepository.UpdateUser(userInput, IdUser);
        }

        public string DeleteUserAsync(int idUser)
        {
            return _usersRepository.DeleteUser(idUser);
        }
    }
}
