using Business.Abstract;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Business.Concrete
{
    public class DistributorManaager : IDistributorsService
    {
        private IDistributorDal _distributorDal;

        public DistributorManaager(IDistributorDal distributorDal)
        {
            _distributorDal = distributorDal;
        }

        public IDataResult<List<Distributor>> GetDistributorByCountryId(int countryId)
        {
            return new SuccessDataResult<List<Distributor>>(_distributorDal.GetList(p => p.CountryId == countryId).ToList());
        }

        public IDataResult<List<Distributor>> GetList()
        {
            return new SuccessDataResult<List<Distributor>>(_distributorDal.GetList().ToList());
        }


    }
}
