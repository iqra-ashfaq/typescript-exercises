"use strict";
let guest = ['kamran khan tessori', 'Daniyal nagori', 'Zia khan'];
// for(let i=0; i<guest.length; i++){
//     console.log('Dear' + guest[i] + ",\n\n It is my pleasure to invite you in my party.\n\nThank You." )
// }
let absentGuest = 'Daniyal nagori';
let NewGuest = 'Miss Hina';
guest[0] = NewGuest;
// for(let i=0; i<guest.length; i++){
//  console.log('Dear' + guest[i] + ",\n\n It is my pleasure to invite you in my party.\n\nThank You." )
//  }
console.log(`Mr ${absentGuest} is not coming.`);
guest.unshift('Sir Ameen');
guest.splice(2, 0, 'Zafar Abbas');
guest.push('Iqra Ashfaq');
// for(let i=0; i<guest.length; i++){
//     console.log('Dear' + guest[i] + ",\n\n It is my pleasure to invite you in my party.\n\nThank You. \n \n" )
// //     }
//     console.log('\n sorry we can not arrange big table we will only invite two people')
//     while(guest.length > 2){
//       let removeGuest =  guest.pop();
//         console.log(`sorry ${removeGuest} we can not invite you`);
// for(let i=0; i<guest.length; i++){
//     console.log('Dear' + guest[i] + ",\n\n you are still invited.\n\nThank You. \n \n" )
// }
guest.splice(0, 2);
console.log(guest);
//exercise no:19
console.log(`remaining number of guest are ${guest.length}`);
