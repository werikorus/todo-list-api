using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace todo_list_api.App.Entities
{
    public class Tasks
    {
        public int IdList { get; set; }
        public int IdTask { get; set; }
        public string Task { get; set; }
        public bool Done { get; set; }
        public DateTime DateSave { get; set; }
        public DateTime DateUpdate { get; set; }

    }
}
