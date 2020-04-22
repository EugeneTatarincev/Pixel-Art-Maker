let row = document.getElementsByClassName('line'),
    container = document.querySelector('.container'),
    col = document.getElementsByClassName('coll'),
    lineColor = document.querySelector('.line-color'),
    button = document.querySelector('#clean'),
    current = document.querySelector('.current');

    // TO MAKE AN ORDINARRY ARRAY OUT OF THIS ONE
    coll = [];
    for(let i = 0; i < col.length; i++){
        coll.push(col[i]);
    }

let color = '';

lineColor.addEventListener('click', function(e) {
    switch(e.target.id){
        case 'red':
            color = 'red';
            break;
        case 'blue':
            color = 'blue';
            break;
        case 'green':
            color = 'green';
            break;
        case 'yellow':
            color = 'yellow';
            break;
        case 'aqua':
            color = '#00FFFF';
            break;
        case 'lime':
            color = '#00FF00';
            break;
        case 'seagreen':
            color = '#2E8B57';
            break;
        case 'magenta':
            color = '#FF00FF';
            break;
    }
});


container.addEventListener('click', function(e) {
    if(coll.includes(e.target)){
        e.target.style.background = color;
    }
});

button.addEventListener('click', function() {
    for(let i of coll){
        i.style.background = 'white';
    }
});

container.addEventListener('click', function(){
    current.style.background = color;
});