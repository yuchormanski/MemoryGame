function field() {

    let symbols = [];
    let temp = [];
    let selectElement = document.getElementById('selectField');
    let table = document.getElementById('gameField');

    let size = 0;
    selectElement.addEventListener('change', () => {
        selectElement.setAttribute('disabled', '');

        size = Number(selectElement.value);
        // ----------------------------
        // fill and randomize array with numbers
        for (let k = 0; k < size * size; k++) {
            temp.push(k);
        }
        let shuffled = temp.sort((a, b) => 0.5 - Math.random());
        for (let l = 1; l <= size * size / 2; l++) {
            let n = Number(shuffled.shift());
            let m = Number(shuffled.shift());
            symbols[n] = l;
            symbols[m] = l;
        }

        // --------------------------------------------
        for (let i = 0; i < size; i++) {
            let row = table.insertRow()
            for (let j = 0; j < size; j++) {
                let cell = row.insertCell();
                // cell.style.color = '#ededed';
                cell.style.color = 'white';
                cell.textContent = symbols.shift();
            }
        }
    })

    let cellsElements = document.querySelector('#gameField');
    let cells = document.getElementsByTagName('td');
    let counter = 0;
    let first = 0;
    let second;
    
    cellsElements.addEventListener('click', (e) => {

        first === 0 ? first = e.target.textContent : second = e.target.textContent;
        counter++;
        if (counter > 2) {

            for(let cell of cells){
                if(!cell.hasAttribute('disabled')){
                //    cell.style.color = '#ededed' 
                cell.style.color = 'white' 
                }
            }
            // e.target.style.color = '#ededed';
            e.target.style.color = 'white';
            counter = 0;
        } else {
            e.target.style.color = '#444';
            // e.target.setAttribute('disabled','');
        }
        if (first === second) {
            for(let el of cells){
                if(el.textContent === first){
                    el.setAttribute('disabled', '');
                    el.style.color ='red';
                    console.log(el);
                }
            }
        } else if (second !== undefined) {
            first = 0;
            second = undefined;
        }


    });


}