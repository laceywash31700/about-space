const successCallback = (position) => {
    console.log(position);
};

const errorCallback = (error) => {
    console.error(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

message1 = confirm('Do you think space is dope?')

message2 = confirm('DOPE WE LIKE SPACE TOO! Did you want to check out my ugly website about space?')

message3 = prompt("are you old enough to be visting site unsupervised")