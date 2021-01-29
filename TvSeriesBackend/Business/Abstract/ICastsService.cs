using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface ICastsService
    {
        IDataResult<List<Casts>> GetList();

        IDataResult<List<Casts>> GetListByCountry(int countryid);

        IResult Add(Casts cast);

        IResult Delete(Casts cast);

        IResult Update(Casts cast);

        IDataResult<Casts> GetById(int castsid);

    }
}
