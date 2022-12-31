using System.Collections.Generic;
using System.Threading.Tasks;
using todo_list_api.Models;

namespace todo_list_api.Interfaces
{
    public interface ITasksRepository
    {
        Task<IEnumerable<Tasks>> GetAllTasksAsync();
        Task<IEnumerable<Tasks>> GetTaskAsync(int idUser, int idList);
    }
}
