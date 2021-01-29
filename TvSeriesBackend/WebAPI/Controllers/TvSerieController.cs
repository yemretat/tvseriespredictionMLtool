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
    public class TvSeriesController : ControllerBase
    {
        private ITvSerieService _tvSeriesService;

        public TvSeriesController (ITvSerieService tvSerieService)
        {
            _tvSeriesService = tvSerieService;
        }
        [HttpGet("getall")]
        public IActionResult GetList()
        {
            var result = _tvSeriesService.GetList();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
        [HttpGet("getlistbycountryid")]

        public IActionResult GetListbyCategory(int countryId)
        {
            var result = _tvSeriesService.GetListByCountry(countryId);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
        [HttpGet("getallmorethanonek")]

        public IActionResult GetListMoreThanOne()
        {
            var result = _tvSeriesService.GetListIdBiggerThan1000();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

    }
}
