using System;
using System.Collections.Generic;

#nullable disable

namespace todo_list_api.Models
{
    public partial class Tasks
    {
        public int Idtask { get; set; }
        public int Idlist { get; set; }
        public string DescriptionTask { get; set; }
        public DateTime? DateCreate { get; set; }
        public DateTime? DateUpdate { get; set; }
        public bool? Done { get; set; }

        public virtual List IdlistNavigation { get; set; }
    }
}
