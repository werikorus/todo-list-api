using todo_list_api.Models;
using todo_list_api.Context;
using todo_list_api.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

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
            var user = await _context.Users.FindAsync(id);
            return user;
        }

        public async Task<IEnumerable<Users>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }   
    }
}
