using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
    public class apiType:IEntity
    { 
        public int Id { get; set; }
        public string dropBoxName { get; set; }
        
        public string apiName { get; set; }
        
        public int countryId { get; set; }


    }
}
