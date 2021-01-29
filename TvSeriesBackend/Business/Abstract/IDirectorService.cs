using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IDirectorService
    {
        IDataResult<List<Director>> GetList();

        IDataResult<List<Director>> GetDirectorByCountryId(int countryId);

        IResult Add(Director company);

        IResult Delete(Director company);

        IResult Update(Director company);


    }
}
