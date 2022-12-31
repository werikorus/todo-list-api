using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using todo_list_api.DTOs;
using todo_list_api.Models;

namespace todo_list_api.Interfaces
{
    public interface IUsersRepository
    {
        Task<Users> GetUser(int id);
        Task<IEnumerable<Users>> GetUsers();
        Users CreateNewUser(UsersCreateDTO userInput);
        Users UpdateUser(UsersUpdateDTO userInput, int IdUser);
        string DeleteUser(int idUser);
    }
}
