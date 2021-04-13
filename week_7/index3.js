/**
 *  Cookies : 
 * 
 * */

cook = {"capacity":"4kb", "accessibility ": "all windows ","expiration": "manually set", "passed in request ": "Yes ", "Stoage ": "Browser And Server "}
local = {"capacity":"5 to 10 mbs (browser dependent )", "accessibility ": "all windows ","expiration": "Never , can be removed from the local storage", "passed in request ": "NO ", "Stoage ": "Browser  "}
sess = {"capacity":"5mb", "accessibility ": "Private to Tab ","expiration": "On Tab Close", "passed in request ": "NO ", "Stoage ": "Browser "}


// allCookies = document.cookie;
// document.cookie = newCookie;

document.cookie = "name=oeschger";
document.cookie = "favorite_food=tripe";

    console.log(document.cookie);

    document.cookie = "test1=Hello";

    document.cookie = "test2=World";

const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('test2='))
  .split('=')[1];
  console.log(cookieValue);


// with expire
  function resetOnce() {
    document.cookie = "doSomethingOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }

//Checking a cookie exists 
 
  if (document.cookie.split(';').some(function(item) {
    return item.trim().indexOf('reader=') == 0
})) {
    console.log('The cookie "reader" exists (ES5)')
}

//ES2016

if (document.cookie.split(';').some((item) => item.trim().startsWith('reader='))) {
    console.log('The cookie "reader" exists (ES6)')
}




// for checking a specific value 
if (document.cookie.split(';').some(function(item) {
    return item.indexOf('reader=1') >= 0
})) {
    console.log('The cookie "reader" has "1" for value')
}

//ES2016

if (document.cookie.split(';').some((item) => item.includes('reader=1'))) {
    console.log('The cookie "reader" has "1" for value')
}
  

// Deleting A cookie 
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// Function to create a cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  setCookie('1','acha',1);




    //The sessionStorage object stores data for only one session (the data is deleted when the browser tab is closed).
    // The localStorage and sessionStorage properties allow to save key/value pairs in a web browser.
    //unlike the localStorage that saves although you have closed the browser


