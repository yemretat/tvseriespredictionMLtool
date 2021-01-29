using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DistributorController : ControllerBase
    {
        private IDistributorsService _distributorsService;

        public DistributorController (IDistributorsService distributorsService)
        {
            _distributorsService = distributorsService;
        }
        [HttpGet("getall")]

        public IActionResult GetList()
        {
            var result = _distributorsService.GetList();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
        [HttpGet("getDistributorsbycountryid")]
        public IActionResult GetCompanybyCountryId(int countryId)
        {
            var result = _distributorsService.GetDistributorByCountryId(countryId);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
    }
}
