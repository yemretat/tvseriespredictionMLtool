using Business.Abstract;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using Microsoft.EntityFrameworkCore.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Business.Concrete
{
    public class KeyWordManager : IKeyWordService
    {
        IKeyWordDal _keywordsdal;
        public KeyWordManager(IKeyWordDal keyworddal)
        {
            _keywordsdal = keyworddal;
        }

        public IDataResult<List<KeyWord>> GetKeywordByCountryId(int countryId)
        {
            return new SuccessDataResult<List<KeyWord>>(_keywordsdal.GetList(p => p.CountryId == countryId).ToList());
        }

        public IDataResult<List<KeyWord>> GetList()
        {
            return new SuccessDataResult<List<KeyWord>>(_keywordsdal.GetList().ToList());
        }
    }
}
