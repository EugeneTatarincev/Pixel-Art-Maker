document.addEventListener('DOMContentLoaded', function () {
    let row = document.getElementsByClassName('line'),
        container = document.querySelector('.container'),
        col = document.querySelectorAll('.coll'),
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

    // Clean all

    button.addEventListener('click', function () {
        for (let i of coll) {
            i.style.background = 'white';
        }
    });


    // PAINTBRUSH

    function mouseOver(el) {
        if (coll.includes(el.target)) {
            el.target.style.background = color;
        }
        document.addEventListener('mouseup', function () {
            container.removeEventListener('mouseover', mouseOver);
        });
    }

    container.addEventListener('mousedown', function (e) {
        let mouseTarget = e.target;
        if (coll.includes(mouseTarget)) {
            mouseTarget.style.background = color;

            container.addEventListener('mouseover', mouseOver);

            container.addEventListener('mouseup', function (event) {
                if (event.target == mouseTarget) {
                    container.removeEventListener('mouseover', mouseOver);
                }
            });
        }

    });

    // INPUT COLOR

    let input = document.querySelector('#inputColor');

    input.addEventListener('change', function (e) {
        color = e.target.value;
        current.style.background = color;
    });


    // SAVE AND LOAD --------------------------------===-------------------------------===-----------------------------

    let save = document.querySelector('#save'),
        contSaveLoad = document.querySelector('.save'),
        divH = document.querySelector('.hide'),
        esc = document.querySelector('#esc'),
        alert = document.querySelector('.alert'),
        select = document.querySelector('.custom-select');

    function saveColors() {
        let colors = [];
        col.forEach(function (item) {
            colors.push(item.style.background);
        });
        return colors;
    }

    function containsOp(val, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].value == val) {
                return true;
            }
        }
        return false;
    }


    esc.addEventListener('click', function () {
        alert.style.display = 'none';
    });

    save.addEventListener('click', function (e) {
        let inputOk = document.querySelector('#inputSave'),
            ok = document.querySelector('#ok'),
            saveKey = '';
        divH.style.display = 'block';
        inputOk.value = " ";
        ok.addEventListener('click', function clickOk() {
            if (inputOk.value != " ") {
                saveKey = inputOk.value;

                divH.style.display = 'none';
                let jsonCol = JSON.stringify(saveColors());
                localStorage.setItem(saveKey, jsonCol);
            }
        });
    });

    //LOAD

    function loadColors(key) {
        let colorsArr = localStorage.getItem(key);
        colorsArr = JSON.parse(colorsArr);
        col.forEach(function (item, index) {
            item.style.background = colorsArr[index];
        });
    }

    function areKeys() {
        let k = 0;
        for (let i in localStorage) {
            k++;
        }
        if (k == 6) {
            return false;
        }
        return true;
    }

    function showSavings() {
        let size = localStorage.length,
            options = document.querySelectorAll('option'),
            k = 0;

        for (let i in localStorage) {
            if (containsOp(i, options)) {
                k++;
            } else {
                let option = document.createElement('option');
                option.innerText = i;
                option.value = i;
                select.appendChild(option);
                k++;
            }

            if (k == size) {
                break;
            }
        }

        let divSelect = document.querySelector('.select');
        divSelect.style.display = 'block';
    }

    let selectOk = document.querySelector('#selectOk');

    load.addEventListener('click', function () {
        if (areKeys()) {
            showSavings();
            selectOk.addEventListener('click', function selOke() {
                loadColors(select.value);

                let divSelect = document.querySelector('.select');
                divSelect.style.display = 'none';
                selectOk.removeEventListener('click', selOke);
            });
        } else {
            alert.style.display = 'block';
        }
    });

    // DELETE
    let deleteBut = document.querySelector('#delete');
    deleteBut.addEventListener('click', function () {
        if (areKeys()) {
            showSavings();
            selectOk.addEventListener('click', function selOk() {
                options = document.querySelectorAll('option');
                localStorage.removeItem(select.value);
                options.forEach(function (item) {
                    if (select.value == item.value) {
                        item.remove();
                    }
                });


                let divSelect = document.querySelector('.select');
                divSelect.style.display = 'none';
                selectOk.removeEventListener('click', selOk);
            });
        } else {
            alert.style.display = 'block';
        }
    });

    // DELETE ALL

    let deleteAll = document.querySelector('#deleteAll');

    function deleteOptions() {
        let options = document.querySelectorAll('option');
        options.forEach(function (item) {
            item.remove();
        });
    }

    deleteAll.addEventListener('click', function () {
        localStorage.clear();
        deleteOptions();
        let divSelect = document.querySelector('.select');
        divSelect.style.display = 'none';
    });


});