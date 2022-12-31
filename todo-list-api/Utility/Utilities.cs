using System;

namespace todo_list_api.Utility
{
    public static class Utilities
    {
        public static int GetNewUserID()
        {
            var random = new Random();
            return random.Next(1, 1000);
        }
    }
}
