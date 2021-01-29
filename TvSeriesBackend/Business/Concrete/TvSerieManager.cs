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
    public class TvSerieManager:ITvSerieService 
    {
        public ITvSerieDal _tvSerieDal;
        public TvSerieManager (ITvSerieDal tvSerieDal)
        {
            _tvSerieDal = tvSerieDal;
        }

        public IDataResult<List<TvSerie>> GetList()
        {
            return new SuccessDataResult<List<TvSerie>>(_tvSerieDal.GetList().ToList());
        }

        public IDataResult<List<TvSerie>> GetListByCountry(int countryid)
        {
            return new SuccessDataResult<List<TvSerie>>(_tvSerieDal.GetList(p =>p.countryId==countryid).ToList());
        }

        public IDataResult<List<TvSerie>> GetListIdBiggerThan1000()
        {
            return new SuccessDataResult<List<TvSerie>>(_tvSerieDal.GetList(p => p.Id>1000).ToList());
        }
    }
}
