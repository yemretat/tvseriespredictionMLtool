using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IApiTypeService
    {
        IDataResult<List<apiType>> GetList();

        IDataResult<List<apiType>> GetListByCountryId(int countryId);

    }
}
