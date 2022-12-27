using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using todo_list_api.Interfaces;
using todo_list_api.Models;
using todo_list_api.Repository;
using todo_list_api.Services.Abstraction.Interfaces;

namespace todo_list_api.Services
{
    public class TasksService : ITasksService
    {
        private readonly ITasksRepository _tasksRepository;

        public TasksService(IServiceProvider serviceProvider)
        {
            _tasksRepository = serviceProvider.GetRequiredService<ITasksRepository>();
        }

        public Task<IEnumerable<Tasks>> GetAllTasksAsync()
        {
            return _tasksRepository.GetAllTasksAsync();
        }

        public Task<IEnumerable<Tasks>> GetTaskAsync(int idUser, int idList)
        {
            return _tasksRepository.GetTaskAsync(idUser, idList);
        }
    }
}

