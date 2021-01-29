using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private ICompanyService _companyService;
        public CompanyController (ICompanyService companyService)
        {
            _companyService = companyService;
        }

        [HttpGet("getall")]
        
        public IActionResult GetList()
        {
            var result = _companyService.GetList();
            if(result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
        [HttpGet("getCompanybycountryid")]
        public IActionResult GetCompanybyCountryId(int countryId)
        {
            var result = _companyService.GetCompanyByCountryId(countryId);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
        [HttpGet("getCompanybyid")]
        public IActionResult GetCompantbyId(int Id)
        {
            var result = _companyService.GetCompanyByCompanyId(Id);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpGet("getCompanybyName")]
        public IActionResult GetCompanybyName(string companyName)
        {
            var result = _companyService.GetCompanyByCompanyName(companyName);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpPost("add")]
        public IActionResult Add(Company cast)
        {
            var result = _companyService.Add(cast);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }
        [HttpPost("update")]
        public IActionResult Update(Company cast)
        {
            var result = _companyService.Update(cast);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }
        [HttpPost("delete")]
        public IActionResult Delete(Company cast)
        {
            var result = _companyService.Delete(cast);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }

    }
}
