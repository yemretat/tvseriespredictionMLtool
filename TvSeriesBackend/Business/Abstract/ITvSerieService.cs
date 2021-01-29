using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface ITvSerieService
    {
        IDataResult<List<TvSerie>> GetList();
        IDataResult<List<TvSerie>> GetListByCountry(int countryid);

        IDataResult<List<TvSerie>> GetListIdBiggerThan1000(); 

    }
}
