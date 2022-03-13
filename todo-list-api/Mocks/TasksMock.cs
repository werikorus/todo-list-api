using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using todo_list_api.App.Entities;

namespace todo_list_api.Mocks
{
    public static class TasksMock
    {
        public static List<Tasks> GetTasks()
        {
            List<Tasks> tarefas = new List<Tasks>();

            DateTime today = new();

            Tasks t1 = new (1, 1, "Estudar HTML", false, today, today, "WERIK");
            Tasks t2 = new (1, 2, "Estudar CSS", false, today, today, "WERIK");
            Tasks t3 = new (1, 3, "Estudar JS", false, today, today, "WERIK");
            Tasks t4 = new (1, 4, "Estudar POO", false, today, today, "WERIK");
            Tasks t5 = new (1, 5, "Estudar C#", false, today, today, "WERIK");
            Tasks t6 = new (1, 6, "Estudar Testes Unitários", false, today, today, "WERIK");
            Tasks t7 = new (1, 7, "Estudar Clean Code", false, today, today, "WERIK");
            Tasks t8 = new (1, 8, "Estudar Design Patters", false, today, today, "WERIK");
            Tasks t9 = new (1, 9, "Estudar RabbitMQ", false, today, today, "WERIK");
            Tasks t10 = new (1, 10, "Estudar Lógica", false, today, today, "WERIK");


            tarefas.Add(t1);
            tarefas.Add(t2);
            tarefas.Add(t3);
            tarefas.Add(t4);
            tarefas.Add(t5);
            tarefas.Add(t6);
            tarefas.Add(t6);
            tarefas.Add(t7);
            tarefas.Add(t8);
            tarefas.Add(t9);
            tarefas.Add(t10);

            return tarefas;
        }
    }
}
