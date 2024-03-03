let Person :string = '';
Person = prompt('what is your name') || ""

let Uppercase :string = Person.toLowerCase();
let lowercase :string = Person.toUpperCase();

let titlecase :string = Person.split( '' ).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');


if(Person !== null && Person !== ''){
    alert(`hello ${Person} your name in:
    uppercase ${Uppercase}
    lowercase ${lowercase}
    titlecase ${titlecase}`)
}
