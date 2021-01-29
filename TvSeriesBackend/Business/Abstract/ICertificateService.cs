using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface ICertificateService
    {
        IDataResult<List<Certificate>> GetList();

        IDataResult<List<Certificate>> GetCertificateByCountryId(int countryId);



    }
}
