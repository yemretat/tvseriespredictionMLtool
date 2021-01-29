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
    public class HarmfulContentManager : IHarmfulContentService
    {
        private IHarmfulContentDal _harmfulcontentDal;

        public HarmfulContentManager(IHarmfulContentDal harmfulContentDal)
        {
            _harmfulcontentDal = harmfulContentDal;
        }
        public IDataResult<List<HarmfulContent>> GetHarmfulContentByCountryId(int countryId)
        {
            return new SuccessDataResult<List<HarmfulContent>>(_harmfulcontentDal.GetList(p => p.CountryId == countryId).ToList());
        }

        public IDataResult<List<HarmfulContent>> GetList()
        {
            return new SuccessDataResult<List<HarmfulContent>>(_harmfulcontentDal.GetList().ToList());
        }
    }
}
