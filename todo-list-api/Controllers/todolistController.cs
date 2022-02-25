using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using todo_list_api.App.Entities;

namespace todo_list_api.Controllers
{
    public class TodolistController : Controller
    {
        // GET: todolistController
        public string MyTasks(int idList)
        {
            // var myTodo = new Tasks();
            var a = 'taks';
            return a
           
        }

        // GET: todolistController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: todolistController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: todolistController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: todolistController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: todolistController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: todolistController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: todolistController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
