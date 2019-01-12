using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CentralStation.Models
{
    public class RequestTypeModel
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public bool Checked { get; set; }
    }

    public class RequestModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PrayerText { get; set; }
        public bool RequestType { get; set; }
    }
}