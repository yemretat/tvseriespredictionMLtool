using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IProducerService
    {
        IDataResult<List<Producer>> GetList();

        IDataResult<List<Producer>> GetProducerByCountryId(int countryId);

    }
}
