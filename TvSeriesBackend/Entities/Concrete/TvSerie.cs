using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
    public class TvSerie:IEntity
    {
        public int Id { get; set; }
        public string movieTitle { get; set; }

        public string imdbRate { get; set; }
        public string Cast { get; set; }
        public string voteNumber { get; set; }
        public string episodeNumber { get; set; }
        public string seasonNumber { get; set; }
        public string Genrees { get; set; }

        public string keywordsContents { get; set; }
        public string locations { get; set; }
        public string detailLocations { get; set; }
        public string producerCompanyNames { get; set; }
        public string directorNames { get; set; }
        public string writerNames { get; set; }
        public string producerNames { get; set; }
        public string distributorsNames { get; set; }
        public string localDistributors { get; set; }
        public string movieDate { get; set; }
        public string watchingTime { get; set; }
        public string lastSeason { get; set; }
         
        public string Reviews { get; set; }
        public string criticReviews { get; set; }

        public string wins { get; set; }
        public string nominations { get; set; }
        public string harmfulContents { get; set; }
        public string certificate { get; set;}
        public string storyLine { get; set; }
        public int countryId { get; set; }
    }
}
