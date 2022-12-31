using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using todo_list_api.Models;

namespace todo_list_api.Services.Abstraction.Interfaces
{
    public interface ITasksService
    {
        Task<IEnumerable<Tasks>> GetAllTasksAsync();
        Task<IEnumerable<Tasks>> GetTaskAsync(int idUser, int idList);
    }
}
