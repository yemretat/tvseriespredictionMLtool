﻿using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
    public class Country:IEntity
    {
        public int Id { get; set; }
        public string countryName { get; set; }
        public string url { get; set; }
        public int countryId { get; set; }


    }
}
