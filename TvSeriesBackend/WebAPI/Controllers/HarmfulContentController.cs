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
    public class HarmfulContentController : ControllerBase
    {
        private IHarmfulContentService _harmfulContentService;

        public HarmfulContentController(IHarmfulContentService harmfulconstentService)
        {
            _harmfulContentService = harmfulconstentService;
        }
        [HttpGet("getall")]
        public IActionResult GetList()
        {
            var result = _harmfulContentService.GetList();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpGet("getharmfulContentbycountryid")]
        public IActionResult GetCompanybyCountryId(int countryId)
        {
            var result = _harmfulContentService.GetHarmfulContentByCountryId(countryId);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

    }
}
