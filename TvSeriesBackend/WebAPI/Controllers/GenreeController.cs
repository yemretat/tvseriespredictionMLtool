using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business.Abstract;
using DataAccess.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenreeController : ControllerBase
    {
        private IGenreeService _genreeService;

        public GenreeController(IGenreeService genreeService)
        {
            _genreeService = genreeService;
        }
        [HttpGet("getall")]

        public IActionResult GetList()
        {
            var result = _genreeService.GetList();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
        [HttpGet("getGenreebycountryId")]
        public IActionResult GetGenreebyCountryId(int countryId)
        {
            var result = _genreeService.GetGenreeByCountryId(countryId);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
    }
}
