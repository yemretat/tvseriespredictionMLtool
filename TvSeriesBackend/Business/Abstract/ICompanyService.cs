using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface ICompanyService
    {
        IDataResult<List<Company>> GetList();

        IDataResult<Company> GetCompanyByCompanyId(int companyid);

        IDataResult<Company> GetCompanyByCompanyName(string companyName);
        IDataResult<List<Company>> GetCompanyByCountryId(int countryId);

        IResult Add(Company company);

        IResult Delete(Company company);

        IResult Update(Company company);
    }
}
