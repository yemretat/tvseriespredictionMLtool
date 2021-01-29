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
    public class CompanyManager : ICompanyService
    {
        private ICompanyDal _companyDal;

        public CompanyManager(ICompanyDal companyDal)
        {
            _companyDal = companyDal;
        }
        public IResult Add(Company company)
        {
            _companyDal.Add(company);
            return new SuccessResult(MagicStrings.CastAdded);
        }

        public IResult Delete(Company company)
        {
            _companyDal.Delete(company);
            return new SuccessResult(MagicStrings.CastDeleted);
        }

        public IDataResult<Company> GetCompanyByCompanyId(int companyid)
        {
            return new SuccessDataResult<Company>(_companyDal.Get(filter: p => p.Id == companyid));
        }

        public IDataResult<Company> GetCompanyByCompanyName(string companyName)
        {
            return new SuccessDataResult<Company>(_companyDal.Get(filter: p => p.name == companyName));
        }

        public IDataResult<List<Company>> GetCompanyByCountryId(int countryId)
        {
            return new SuccessDataResult<List<Company>>(_companyDal.GetList(p => p.CountryId == countryId).ToList());
        }

        public IDataResult<List<Company>> GetList()
        {
            return new SuccessDataResult<List<Company>>(_companyDal.GetList().ToList());
        }

        public IResult Update(Company company)
        {
            _companyDal.Update(company);
            return new SuccessResult(MagicStrings.CastUpdated);
        }
    }
}
