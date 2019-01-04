using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CentralStation.Controllers
{
    public class HomeController : Controller
    {
        static public List<string> MyList = new List<string>()
            {
                "String1",
                "String2",
                "String3"
            };
        public ActionResult Index()
        {
            List<SelectListItem> fruitList = new List<SelectListItem>();
            SelectListItem item1 = new SelectListItem() { Text = "Apple", Value = "1", Selected = true };
            SelectListItem item2 = new SelectListItem() { Text = "Banana", Value = "2", Selected = false };
            SelectListItem item3 = new SelectListItem() { Text = "Pear", Value = "3", Selected = false };
            SelectListItem item4 = new SelectListItem() { Text = "Peach", Value = "4", Selected = false };
            SelectListItem item5 = new SelectListItem() { Text = "Orange", Value = "5", Selected = false };
            SelectListItem item6 = new SelectListItem() { Text = "Plum", Value = "6", Selected = false };
            fruitList.Add(item1);
            fruitList.Add(item2);
            fruitList.Add(item3);
            fruitList.Add(item4);
            fruitList.Add(item5);
            fruitList.Add(item6);
            ViewBag.Fruit = fruitList;
            return View();
        }

        public ActionResult RequestForum()
        {
            return View();
        }

        public ActionResult About()
        {

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}