using System;
using System.Text;



namespace ATM_machine
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Title = "ATM Machine";

            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine("Welcome! Please insert 4 digit pin");

            get_check_password();
          
                Console.WriteLine("Press 1 for Withdrawl ");
                Console.WriteLine("Press 2 for Deposit ");

                var input = Console.ReadLine();
                Console.Clear();
                if (input == "1")
                {
                    Console.WriteLine("Enter withdrawl amount");
                    var withdrwlAmount = Console.ReadLine();
                    Console.Clear();
                    Console.WriteLine("Your balance have increased with $" + withdrwlAmount + " Thank you!");

                }
                if (input == "2")
                {
                    Console.WriteLine("Enter Deposit amount");
                    var depositAmount = Console.ReadLine();
                    Console.Clear();
                    Console.WriteLine("You have deposited $" + depositAmount + " into your balance. Thank you!");

                }
        }


        private static string PinCatcher()
        {
            StringBuilder sb = new StringBuilder();
            ConsoleKeyInfo keyInfo;

            do
            {
                keyInfo = Console.ReadKey(true);
                
                if (!char.IsControl(keyInfo.KeyChar))
                {
                    sb.Append(keyInfo.KeyChar);
                    Console.Write("*");
                }

            } while (keyInfo.Key != ConsoleKey.Enter);
            {
                return sb.ToString();
            }
        }

       private static void get_check_password()
        {
            var enter_password = true;
            var password_tries = 0;
            while (enter_password)
            {
                string pin = PinCatcher();

                if (pin == "0000" || pin == "4623")
                {
                    enter_password = false;
                    Console.WriteLine("Correct password. Login...");
                }
                else
                {
                    Console.WriteLine("Invalid pin. Try again...");
                }

                if (password_tries >= 2)
                {
                    Console.WriteLine("Exceeded 3 tries. Exiting...");
                    Environment.Exit(0);
                }
                password_tries += 1;
            }
            Console.Clear();
        }

    }
}
