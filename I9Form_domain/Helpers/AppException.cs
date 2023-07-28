using System.Globalization;
//This file file contains the custom format for the web app exceptions.
namespace I9Form_domain.Helpers
{
    public class AppException : Exception
    {
        public AppException() : base() { }
        public AppException(string message) : base(message) { }
        public AppException(string message, params object[] args) : base(string.Format(CultureInfo.CurrentCulture, message, args)) { }
    }
}