using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IDistributorsService
    {
        IDataResult<List<Distributor>> GetList();

        IDataResult<List<Distributor>> GetDistributorByCountryId(int countryId);

    }
}
