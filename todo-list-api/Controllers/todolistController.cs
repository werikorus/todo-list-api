using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using todo_list_api.App.Entities;
using todo_list_api.Mocks;


namespace todo_list_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodolistController : Controller
    {
        [HttpGet]
        public List<Tasks> GetAllTasksAsync()
        {
            List<Tasks> tarefas = TasksMock.GetTasks();
            return  tarefas;
        }

    }
}
