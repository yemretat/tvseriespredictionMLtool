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
    public class ApiTypeMethodController : ControllerBase
    {
        private IApiTypeMethodService _apiMethodService;
        public ApiTypeMethodController (IApiTypeMethodService apiMethodService)
        {
            _apiMethodService = apiMethodService;
        }
        [HttpGet("getall")]

        public IActionResult GetList()
        {
            var result = _apiMethodService.GetList();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
        [HttpGet("getapiTypelistbycategory")]

        public IActionResult GetListbyCategory(int countryId)
        {
            var result = _apiMethodService.GetListByapiTypeid(countryId);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

    }
}
