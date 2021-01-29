using Business.Abstract;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;

namespace Business.Concrete
{
    public class CertificateManager : ICertificateService
    {
        private ICertificateDal _certificateDal;

        public CertificateManager(ICertificateDal certificateDal)
        {
            _certificateDal = certificateDal;
        }

        public IDataResult<List<Certificate>> GetCertificateByCountryId(int countryId)
        {
            return new SuccessDataResult<List<Certificate>>(_certificateDal.GetList(p => p.CountryId == countryId).ToList());
        }

        public IDataResult<List<Certificate>> GetList()
        {
            return new SuccessDataResult<List<Certificate>>(_certificateDal.GetList().ToList());
        }
    }
}
