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
    public class GenreeManager : IGenreeService
    {
        private IGenreesDal _genreeDal;

        public GenreeManager (IGenreesDal genreeDal)
        {
            _genreeDal = genreeDal;
        }
        public IDataResult<List<Genree>> GetGenreeByCountryId(int countryId)
        {
            return new SuccessDataResult<List<Genree>>(_genreeDal.GetList(p => p.CountryId == countryId).ToList());
        }

        public IDataResult<List<Genree>> GetList()
        {
            return new SuccessDataResult<List<Genree>>(_genreeDal.GetList().ToList());
        }
    }
}
