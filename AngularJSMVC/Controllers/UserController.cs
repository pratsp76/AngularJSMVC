using AngularJSMVC.Models.EF;
using System.Linq;
using System.Web.Mvc;

namespace AngularJSMVC.Controllers
{
    public class UserController : Controller
    {
        private AngularjsMvcDbContext db = null;

        public UserController()
        {
            db = new AngularjsMvcDbContext();
        }

        public JsonResult Index()
        {
            var users = db.Users.ToList();
            return Json(users, JsonRequestBehavior.AllowGet);
        }
    }
}