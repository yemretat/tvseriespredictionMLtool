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
    public class KeyWordController : ControllerBase
    {
        private IKeyWordService _keywordService;

        public KeyWordController(IKeyWordService keywordService)
        {
            _keywordService = keywordService;
        }

        [HttpGet("getall")]

        public IActionResult GetList()
        {
            var result = _keywordService.GetList();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpGet("getKeywordbycountryid")]
        public IActionResult GetCompanybyCountryId(int countryId)
        {
            var result = _keywordService.GetKeywordByCountryId(countryId);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

    }
}
