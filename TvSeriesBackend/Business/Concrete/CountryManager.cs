using Business.Abstract;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Business.Concrete
{
    public class CountryManager : ICountryService
    {
        private ICountryDal _countryDal;

        public CountryManager(ICountryDal countryDal)
        {
            _countryDal = countryDal;
        }

        public IResult Add(Country cast)
        {
            _countryDal.Add(cast);
            return new SuccessResult(MagicStrings.CastAdded);
        }
        public IResult Update(Country cast)
        {
            _countryDal.Update(cast);
            return new SuccessResult(MagicStrings.CastUpdated);
        }
        public IResult Delete(Country cast)
        {
            _countryDal.Delete(cast);
            return new SuccessResult(MagicStrings.CastDeleted);
        }

        public IDataResult<Country> GetCountryByCountryId(int countryid)
        {
            return new SuccessDataResult<Country>(_countryDal.Get(p => p.countryId == countryid));
        }

        public IDataResult<Country> GetCountryByCountryName(string countryName)
        {
            return new SuccessDataResult<Country>(_countryDal.Get(p => p.countryName == countryName));
        }

        public IDataResult<List<Country>> GetList()
        {
            return new SuccessDataResult<List<Country>>(_countryDal.GetList().ToList());
        }


    }
}
