function setCookie(cookieName, cookieValue, daysToExpire) {
      // create date
      var date = new Date();
      date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
      // create cookie 
      var expires = "expires=" + date.toUTCString();
      document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}
function getCookie(cookieName) {
      // access cookie
      var name = cookieName + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
                  c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                  return c.substring(name.length, c.length);
            }
      }
      return "";
}
function verifiyCookie() {
      // verify cookie
      // use prompt messages 
      // if cookie doesnt exist use prompt to show message "Hello, please insert your name"
      // if cookie exist show message "Hello {name}"
      var username = getCookie("username");
      if (username != "") {
            alert("Hello " + username);
      } else {
            username = prompt("Hello, please insert your name:", "");
            if (username != "" && username != null) {
                  setCookie("username", username, 365);
            }
      }
}