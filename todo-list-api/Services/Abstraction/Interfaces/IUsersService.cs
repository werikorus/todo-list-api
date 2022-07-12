using System.Collections.Generic;
using System.Threading.Tasks;
using todo_list_api.Models;

namespace todo_list_api.Services.Abstraction.Interfaces
{
    public interface IUsersService
    {
        Task<IEnumerable<Users>> GetAllUsersAsync();
        Task<Users> GetUserAsync(int id);
    }
}
