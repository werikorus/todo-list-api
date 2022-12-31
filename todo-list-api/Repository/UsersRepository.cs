using todo_list_api.Models;
using todo_list_api.Context;
using todo_list_api.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using todo_list_api.DTOs;
using Microsoft.AspNetCore.Diagnostics;
using GraphQL.Execution;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace todo_list_api.Repository
{
    public class UsersRepository : IUsersRepository
    {
        private readonly ToDoListContext _context;

        public UsersRepository(ToDoListContext context)
        {
            _context = context;
        }

        public async Task<Users> GetUser(int id)
        {
            try
            {
                var user = await _context.Users.FindAsync(id);
                return user;
            }
            catch
            {
                return null;
            }

        }

        private Users SelectUser(int idUser)
        {
            return _context.Users.Find(idUser);
        }

        public async Task<IEnumerable<Users>> GetUsers()
        {
            try
            {
                return await _context.Users.ToListAsync();
            }
            catch
            {
                return null;
            }

        }

        public Users CreateNewUser(UsersCreateDTO userInput)
        {
            try
            {
                Users user = UsersCreateDTO.ConverterParaEntidade(userInput);
                _context.Users.Add(user);
                _context.SaveChangesAsync();
                return user;
            }
            catch
            {
                return null;
            }
        }

        public Users UpdateUser(UsersUpdateDTO userInput, int IdUser)
        {                       
            Users userObj = UsersUpdateDTO.ConverterParaEntidade(userInput);

            _context.Users.Update(userObj);

            try
            {
               _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsersExists(IdUser))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }

            return userObj;
        }

        public string DeleteUser(int idUser)
        {
            try
            {
                var user = SelectUser(idUser);

                if (user != null)
                {
                    _context.Users.Remove(user);
                    _context.SaveChangesAsync();
                    return "User deleted sucessfully!";
                }
                else
                {
                    return "User not found!";
                }
            }
            catch
            {
                return "FAIL! Error when trying deleting User!";
            }
        }

        private bool UsersExists(int id)
        {
            return _context.Users.Any(e => e.IdUser == id);
        }
    }
}
