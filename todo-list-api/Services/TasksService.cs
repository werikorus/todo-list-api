using System.Collections.Generic;
using System.Threading.Tasks;
using todo_list_api.Models;
using todo_list_api.Services.Abstraction.Interfaces;

namespace todo_list_api.Services
{
    public class TasksService : ITasksService
    {
        public Task<IEnumerable<Tasks>> GetAllTasksAsync()
        {
            throw new System.NotImplementedException();
        }
    }
}
