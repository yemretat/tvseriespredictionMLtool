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
    public class ProducerManager : IProducerService
    {
        private IProducerDal _producerDal;
        
        public ProducerManager(IProducerDal producerDal)
        {
            _producerDal = producerDal;
        }
        public IDataResult<List<Producer>> GetList()
        {
            return new SuccessDataResult<List<Producer>>(_producerDal.GetList().ToList());
        }

        public IDataResult<List<Producer>> GetProducerByCountryId(int countryId)
        {
            return new SuccessDataResult<List<Producer>>(_producerDal.GetList(p => p.CountryId == countryId).ToList());
        }


    }
}
