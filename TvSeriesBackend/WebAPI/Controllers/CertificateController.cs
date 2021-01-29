using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Threading.Tasks;
using Business.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CertificateController : ControllerBase
    {
        private ICertificateService _certificateService;
        public CertificateController (ICertificateService certificateService)
        {
            _certificateService = certificateService;
        }
        [HttpGet("getall")]

        public IActionResult GetList()
        {
            var result = _certificateService.GetList();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
        [HttpGet("getCertificatebycountryid")]
        public IActionResult GetCompanybyCountryId(int countryId)
        {
            var result = _certificateService.GetCertificateByCountryId(countryId);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
    }
}
