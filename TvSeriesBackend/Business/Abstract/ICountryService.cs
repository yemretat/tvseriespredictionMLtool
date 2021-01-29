using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface ICountryService
    {
        IDataResult<List<Country>> GetList();

        IDataResult <Country> GetCountryByCountryId(int countryid);

        IDataResult<Country> GetCountryByCountryName(string countryName);

        IResult Add(Country cast);

        IResult Delete(Country cast);

        IResult Update(Country cast);



    }
}
