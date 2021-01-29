using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IGenreeService
    {
        IDataResult<List<Genree>> GetList();

        IDataResult<List<Genree>> GetGenreeByCountryId(int countryId);


    }
}
