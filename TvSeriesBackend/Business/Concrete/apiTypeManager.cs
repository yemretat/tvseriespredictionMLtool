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
    public class apiTypeManager : IApiTypeService
    {
        private IapiTypeDal _apiTypeDal;

        public apiTypeManager(IapiTypeDal apiTypeDal)
        {
            _apiTypeDal = apiTypeDal;
        }
        public IDataResult<List<apiType>> GetList()
        {
            return new SuccessDataResult<List<apiType>>(_apiTypeDal.GetList().ToList());
        }

        public IDataResult<List<apiType>> GetListByCountryId(int countryId)
        {
            return new SuccessDataResult<List<apiType>>(_apiTypeDal.GetList(p => p.countryId==countryId).ToList());
        }
    }
}
