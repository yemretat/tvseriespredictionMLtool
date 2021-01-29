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
    public class CastssController : ControllerBase
    {
        private ICastsService _castService;

        public CastssController(ICastsService castservice)
        {
            _castService = castservice;
        }
        [HttpGet("getall")]

        public IActionResult GetList()
        {
            var result = _castService.GetList();
            if(result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpGet("getlistbycategory")]

        public IActionResult GetListbyCategory(int countryId)
        {
            var result = _castService.GetListByCountry(countryId);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }


        [HttpGet("getbyid")]

        public IActionResult Getbyid(int productid)
        {
            var result = _castService.GetById(productid);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
        [HttpPost("add")]
        public IActionResult Add(Casts cast)
        {
            var result = _castService.Add(cast);
            if(result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }
        [HttpPost("update")]
        public IActionResult Update(Casts cast)
        {
            var result = _castService.Update(cast);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }
        [HttpPost("delete")]
        public IActionResult Delete(Casts cast)
        {
            var result = _castService.Delete(cast);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }


    }
}
