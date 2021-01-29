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
    public class ApiTypeController : ControllerBase
    {
        private IApiTypeService _apiTypeService;
        public ApiTypeController (IApiTypeService apiTypeService)
        {
            _apiTypeService = apiTypeService;
        }
        [HttpGet("getall")]
        public IActionResult GetList()
        {
            var result = _apiTypeService.GetList();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
        [HttpGet("getApiTypebyCountryId")]
        public IActionResult GetApiTypeByCountryId (int countryId)
        {
            var result = _apiTypeService.GetListByCountryId(countryId);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
    }
}
