"use strict";
let Person = '';
Person = prompt('what is your name') || ""
let Uppercase  = Person.toLowerCase();
let lowercase  = Person.toUpperCase();
let titlecase  = Person.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
if (Person !== null && '') {
    alert(`hello ${Person} your name in
    uppercase ${Uppercase}
    lowercase ${lowercase}
    titlecase ${titlecase}`);
}
