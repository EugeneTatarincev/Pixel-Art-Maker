let row = document.getElementsByClassName('line'),
    container = document.querySelector('.container'),
    col = document.getElementsByClassName('coll'),
    lineColor = document.querySelector('.line-color'),
    button = document.querySelector('#clean'),
    current = document.querySelector('.current');

// TO MAKE AN ORDINARRY ARRAY OUT OF THIS ONE
coll = [];
for (let i = 0; i < col.length; i++) {
    coll.push(col[i]);
}

let color = '';

// CHOOSING THE COLOR AND REMEBERING THAT IN THE VARIABLE

lineColor.addEventListener('click', function (e) {
    switch (e.target.id) {
        case 'red':
            color = 'red';
            current.style.background = color;
            break;
        case 'blue':
            color = 'blue';
            current.style.background = color;
            break;
        case 'green':
            color = 'green';
            current.style.background = color;
            break;
        case 'yellow':
            color = 'yellow';
            current.style.background = color;
            break;
        case 'aqua':
            color = '#00FFFF';
            current.style.background = color;
            break;
        case 'lime':
            color = '#00FF00';
            current.style.background = color;
            break;
        case 'seagreen':
            color = '#2E8B57';
            current.style.background = color;
            break;
        case 'magenta':
            color = '#FF00FF';
            current.style.background = color;
            break;
        case 'white':
            color = 'white';
            current.style.background = color;
            break;
    }
});

// Checking if the target is a coll and then add the color to that

/*container.addEventListener('click', function (e) {
    if (coll.includes(e.target)) {
        e.target.style.background = color;
    }
}); */

// Clean all

button.addEventListener('click', function () {
    for (let i of coll) {
        i.style.background = 'white';
    }
});

// Show user which color is being used


// PAINTBRUSH

container.addEventListener('mousedown', function (e) {
    if (coll.includes(e.target)) {
        e.target.style.background = color;
        over();
    }
    
});

function over() {
    container.addEventListener('mouseover', function mouseOver(e){
        if (coll.includes(e.target)) {
            e.target.style.background = color;
        }
        document.addEventListener('mouseup', function(e){
            container.removeEventListener('mouseover', mouseOver);
        });
    });
}


// INPUT COLOR

let input = document.querySelector('#inputColor');

input.addEventListener('change', function(e){
    color = e.target.value;
    current.style.background = color;
});



