using Autofac;
using Business.Abstract;
using Business.Concrete;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFrameWork;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.DependencyResolver.Autofac
{
    /*Module genelde şu interface'in karşılığı budur tarzı şeyleri denen */
    public class AutofacBusinessModule:Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            /*Eğer birisi ICastService kullanırsa biz ona CastManager verecek olacaz */
            builder.RegisterType<CastsManager>().As<ICastsService>();
            builder.RegisterType<EfCastsDal>().As<ICastDal>();
            /*Bunu şimdi Apide Configure Edecez*/
            builder.RegisterType<CountryManager>().As<ICountryService>();
            builder.RegisterType<EfCountryDal>().As<ICountryDal>();

            builder.RegisterType<CompanyManager>().As<ICompanyService>();
            builder.RegisterType<EfCompanyDal>().As<ICompanyDal>();

            builder.RegisterType<DirectorManager>().As<IDirectorService>();
            builder.RegisterType<EfDirectorDal>().As<IDirectorDal>();


            builder.RegisterType<ProducerManager>().As<IProducerService>();
            builder.RegisterType<EfProducerDal>().As<IProducerDal>();

            builder.RegisterType<DistributorManaager>().As<IDistributorsService>();
            builder.RegisterType<EfDistributorDal>().As<IDistributorDal>();

            builder.RegisterType<GenreeManager>().As<IGenreeService>();
            builder.RegisterType<EfGenreeDal>().As<IGenreesDal>();

            builder.RegisterType<KeyWordManager>().As<IKeyWordService>();
            builder.RegisterType<EfKeyWordDal>().As<IKeyWordDal>();

            builder.RegisterType<EfHarmfulContentDal>().As<IHarmfulContentDal>();
            builder.RegisterType<HarmfulContentManager>().As<IHarmfulContentService>();

            builder.RegisterType<EfCertificateDal>().As<ICertificateDal>();
            builder.RegisterType<CertificateManager>().As<ICertificateService>();

            builder.RegisterType<EfapiTypeDal>().As<IapiTypeDal>();
            builder.RegisterType<apiTypeManager>().As<IApiTypeService>();

            builder.RegisterType<EfapiTypesMethodDal>().As<IapiTypesMethodsDal>();
            builder.RegisterType<apiTypeMethodManager>().As<IApiTypeMethodService>();

            builder.RegisterType<EfTvSerieDal>().As<ITvSerieDal>();
            builder.RegisterType<TvSerieManager>().As<ITvSerieService>();
        }
    }
}
