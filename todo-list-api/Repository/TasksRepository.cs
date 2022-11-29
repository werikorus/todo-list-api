using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using todo_list_api.Context;
using todo_list_api.Interfaces;
using todo_list_api.Models;

namespace todo_list_api.Repository
{
    public class TasksRepository : ITasksRepository
    {
        private readonly ToDoListContext _context;
        public TasksRepository(ToDoListContext context)
        {
           _context = context;
        }

        public async Task<IEnumerable<Tasks>> GetAllTasksAsync()
        {
            return await _context.Tasks.ToListAsync();
        }

        public async Task<IEnumerable<Tasks>> GetTaskAsync(int idUser, int idList)
        {
            //return await _context.Tasks.FindAsync(x => x);
            return null;
        }
    }
}
