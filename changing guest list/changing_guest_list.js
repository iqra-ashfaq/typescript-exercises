"use strict";
let guest = ['kamran khan tessori', 'Daniyal nagori', 'Zia khan'];
for (let i = 0; i < guest.length; i++) {
    console.log('Dear' + guest[i] + ",\n\n It is my pleasure to invite you in my party.\n\nThank You.");
}
let absentGuest = 'Daniyal nagori';
let NewGuest = 'Miss Hina';
guest[0] = NewGuest;
for (let i = 0; i < guest.length; i++) {
    console.log('Dear' + guest[i] + ",\n\n It is my pleasure to invite you in my party.\n\nThank You.");
}
console.log(`Mr ${absentGuest} is not coming.`);
