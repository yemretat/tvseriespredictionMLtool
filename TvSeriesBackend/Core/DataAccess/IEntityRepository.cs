using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Core.DataAccess
{
    /*Aşağıda T class olsun IEntity türünde ama newlenebilir olsun interface olmasın */
    public interface IEntityRepository<T> where T:class,IEntity,new()
    {
        T Get(Expression<Func<T, bool>> filter);
        /* Her türlü paremetreyi gönderebilmek için linq expression parametre olarak koyduk */
        IList<T> GetList(Expression<Func<T, bool>> filter = null);

       

        void Add(T entity);
        void Delete(T entity);
        void Update(T entity);

    }
}
  