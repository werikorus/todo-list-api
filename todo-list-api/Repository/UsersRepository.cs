using todo_list_api.Models;
using todo_list_api.Context;
using todo_list_api.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using todo_list_api.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;


namespace todo_list_api.Repository
{
    public class UsersRepository : IUsersRepository
    {
        private readonly ToDoListContext _context;

        public UsersRepository(ToDoListContext context)
        {
            _context = context;
        }

        public async Task<Users> GetUser(int id)
        {
            try
            {
                var user = await _context.Users.FindAsync(id);
                return user;
            }
            catch
            {
                return null;
            }

        }

        public async Task<IEnumerable<Users>> GetUsers()
        {
            try
            {
                return await _context.Users.ToListAsync();
            }
            catch
            {
                return null;
            }
            
        }

        public Users CreateNewUser(UsersCreateDTO userInput)
        {
            try
            {
                Users user = UsersCreateDTO.ConverterParaEntidade(userInput);
                _context.Users.Add(user);
                _context.SaveChangesAsync();
                return user;
            }
            catch
            {
                return null;
            }
        }
    }
}
