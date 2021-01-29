using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
    public class Director:IEntity
    {
        public int Id { get; set; }
        public string name { get; set; }
        public double totalpoint { get; set; }

        public int CountryId { get; set; }

    }
}
