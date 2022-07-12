using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using todo_list_api.Models;

namespace todo_list_api.Interfaces
{
    public interface IUsersRepository
    {
        Task<Users> GetUser(int id);

        Task<IEnumerable<Users>> GetUsers();
    }
}
