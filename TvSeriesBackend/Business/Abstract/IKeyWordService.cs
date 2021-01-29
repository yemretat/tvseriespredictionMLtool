using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IKeyWordService
    {
        IDataResult<List<KeyWord>> GetList();
        IDataResult<List<KeyWord>> GetKeywordByCountryId(int countryId);

    }
}

