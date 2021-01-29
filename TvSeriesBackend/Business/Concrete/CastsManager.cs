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
    public class CastsManager : ICastsService
    {
        private ICastDal _castsdal;

        public CastsManager(ICastDal castdal)
        {
            _castsdal = castdal;
        }
        public IResult Add(Casts cast)
        {
            _castsdal.Add(cast);
            return new SuccessResult(MagicStrings.CastAdded);
        }

        public IResult Delete(Casts cast)
        {
            _castsdal.Delete(cast);
            return new SuccessResult(MagicStrings.CastDeleted);
        }

        public IDataResult<Casts> GetById(int castsid)
        {
            return new SuccessDataResult<Casts>(_castsdal.Get(filter: p => p.CountryId == castsid));
        }

        public IDataResult<List<Casts>> GetList()
        {  
            return new SuccessDataResult<List<Casts>>(_castsdal.GetList().ToList());
        }

        public IDataResult<List<Casts>> GetListByCountry(int countryid)
        {
            return new SuccessDataResult<List<Casts>>(_castsdal.GetList(p =>p.CountryId==countryid).ToList());
            /*Şuanda ülkelere göre id vermedik ondan dolayı  direk yolluyoruz sonra düzeltecem */
        }

        public IResult Update(Casts cast)
        {
            _castsdal.Update(cast);
            return new SuccessResult(MagicStrings.CastUpdated );
        }
    }
}
