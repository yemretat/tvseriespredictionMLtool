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
    public class ProducerController : ControllerBase
    {
        private IProducerService _producerService;
        public ProducerController (IProducerService producerService)
        {
            _producerService = producerService;
        }
        [HttpGet("getall")]

        public IActionResult GetList()
        {
            var result = _producerService.GetList();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
        [HttpGet("getProducerbycountryid")]
        public IActionResult GetProducerbyCountryId(int countryId)
        {
            var result = _producerService.GetProducerByCountryId(countryId);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
    }
}
