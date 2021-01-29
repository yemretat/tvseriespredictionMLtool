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
    public class DirectorManager : IDirectorService
    {
        private IDirectorDal _directorDal;

        public DirectorManager(IDirectorDal directorDal)
        {
            _directorDal = directorDal;
        }
        public IResult Add(Director company)
        {
            _directorDal.Add(company);
            return new SuccessResult(MagicStrings.CastAdded);

        }

        public IResult Delete(Director company)
        {
            _directorDal.Delete(company);
            return new SuccessResult(MagicStrings.CastDeleted);


        }

        public IDataResult<List<Director>> GetDirectorByCountryId(int countryId)
        {
            return new SuccessDataResult<List<Director>>(_directorDal.GetList(p => p.CountryId == countryId).ToList());
        }

        public IDataResult<List<Director>> GetList()
        {
            return new SuccessDataResult<List<Director>>(_directorDal.GetList().ToList());
        }

        public IResult Update(Director company)
        {
            _directorDal.Update(company);
            return new SuccessResult(MagicStrings.CastUpdated);
        }
    }
}
