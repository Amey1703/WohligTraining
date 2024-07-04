/* Cookies vs localStoraege vs sessionStorage */

localStorage.setItem('lunch', 'cereal');
console.log(localStorage.getItem('breakfast'));

localStorage.removeItem('lunch');


sessionStorage.setItem('breakfast', 'eggs');
console.log(sessionStorage.getItem('breakfast'));
localStorage.clear();
sessionStorage.clear();

document.cookie = "hello=world;"
document.cookie = "doSomethingOnlynOnce=true; expires=Fri, 05 July 2024 09:00:00 GMT";
console.log(document.cookie);