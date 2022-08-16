using System;
using todo_list_api.Models;
using System.ComponentModel.DataAnnotations;

namespace todo_list_api.DTOs
{
    public class UsersCreateDTO
    {
        private const string _errorMessage = "The field {0} must be informed!";

        public int IdUser { get; set; }

        [Required(ErrorMessage = _errorMessage)]
        [Display(Name = "name")]
        public string Name { get; set; }

        [Required(ErrorMessage = _errorMessage)]
        [Display(Name = "password")]
        public string Password { get; set; }

        [Required(ErrorMessage = _errorMessage)]
        [RegularExpression(".+\\@.+\\..+", ErrorMessage = _errorMessage)]
        [DataType(DataType.EmailAddress)]
        [Display(Name = "email")]        
        public string Email { get; set; }

        public static Users ConverterParaEntidade(UsersCreateDTO requisicao)
        {
            if (requisicao == null)
            {
                return null;
            }

            return new Users()
            {
                IdUser = requisicao.IdUser,
                Name = requisicao.Name,
                Password = requisicao.Password,
                Email = requisicao.Email,
                DateCreate = DateTime.Now,
                DateUpdate = DateTime.Now
            };
        }
    }
}
