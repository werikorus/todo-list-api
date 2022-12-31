using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using todo_list_api.Context;
using todo_list_api.Interfaces;
using todo_list_api.Models;
using System.Linq;

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

        public IEnumerable<Tasks> GetTaskAsync(int idUser, int idList)
        {
            return IEnumerable<Tasks> _context.Tasks.Find(idUser, idList);
        }
    }
}
