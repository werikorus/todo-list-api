using System;
using System.Collections.Generic;

#nullable disable

namespace todo_list_api.Models
{
    public partial class List
    {
        public List()
        {
            Tasks = new HashSet<Tasks>();
            DateCreate = DateTime.Now;
        }

        public int Idlist { get; set; }
        public string DescriptionList { get; set; }
        public DateTime? DateCreate { get; private set; }
        public DateTime? DateUpdate { get; set; }

        public int IdUser { get; set; }

        public virtual ICollection<Tasks> Tasks { get; set; }
    }
}
