let guest : string[] = ['kamran khan tessori', 'Daniyal nagori', 'Zia khan']

for(let i=0; i<guest.length; i++){
    console.log('Dear' + guest[i] + ",\n\n It is my pleasure to invite you in my party.\n\nThank You." )
    
}

let absentGuest : string = 'Daniyal nagori';

let NewGuest : string = 'Miss Hina';

guest[0] = NewGuest;

for(let i=0; i<guest.length; i++){
    console.log('Dear' + guest[i] + ",\n\n It is my pleasure to invite you in my party.\n\nThank You." )
    
}

console.log(`Mr ${absentGuest} is not coming.`)