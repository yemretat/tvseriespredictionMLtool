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
    public class apiTypeMethodManager : IApiTypeMethodService
    {
        private IapiTypesMethodsDal _apitypesmethodDal;

        public apiTypeMethodManager (IapiTypesMethodsDal apitypesmethodDal)
        {
            _apitypesmethodDal = apitypesmethodDal;
        }
        public IDataResult<List<apiTypesMethod>> GetList()
        {
            return new SuccessDataResult<List<apiTypesMethod>>(_apitypesmethodDal.GetList().ToList());
        }

        public IDataResult<List<apiTypesMethod>> GetListByapiTypeid(int apiTypeid)
        {
            return new SuccessDataResult<List<apiTypesMethod>>(_apitypesmethodDal.GetList(p => p.apiTypesId == apiTypeid).ToList());
        }
    }
}
