using System;
using todo_list_api.Models;

namespace todo_list_api.DTOs
{
    public class TasksCreateDTO
    {
        public int Idtask { get; set; }
        public int Idlist { get; set; }
        public string DescriptionTask { get; set; }
        public DateTime? DateUpdate { get; set; }
        public bool? Done { get; set; }

        public virtual List IdlistNavigation { get; set; }

        public static Tasks ConverterParaEntidade(TasksCreateDTO requisicao)
        {
            if (requisicao == null)
            {
                return null;
            }

            return new Tasks()
            {
                Idtask = requisicao.Idtask,
                Idlist = requisicao.Idlist,
                DescriptionTask = requisicao.DescriptionTask,
                DateUpdate = requisicao.DateUpdate,
                Done = requisicao.Done
            };
        }
    }
}
