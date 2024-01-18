var div = document.getElementById('UserContainer');
var display = 0;


function hideA() {
    
    
        div.style.backgroundColor = 'black';
    
}



function hideP() {

    if (display == 1) {
        div.style.display = 'block';
        display = 0;
    } else {
        div.style.display = 'none';
        display = 1;
    }
}

