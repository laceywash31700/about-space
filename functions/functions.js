// function should confirm if user thinks outer Space is dope (m1) 
// if true function should run (m2) which confirms if they want to see the site.
// else if function should confirm user to should leave site (m4)
// if (m4) is true should redirect to google.
// else if should confirm (m2)
// if true (m2) is true should run age= prompt "how old are you?"
// should input value as a number
//  if (age <  12) site should open
// else take user to cartoon network.
function entersite() {

    let m1 = confirm('Do you think space is dope?');
    let m2;
    let m3;
    let m4;

    if (m1 === true) {
        m2 = confirm('DOPE WE LIKE SPACE TOO! Did you want to check out my ugly website about space?');
        if (m2) {
            m3 = prompt("how old are you?");
            while (parseInt(m3) < 12 && m3) {
                m3 = prompt("how old are you?");
            }
        } else {
            m4 = confirm('get out then');
        }
    }
    else {
        m4 = confirm('get out then');
       while(m4 === false && m4);
        }
    }
entersite()