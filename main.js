const gridElement = document.getElementById('grid');

const createGridElement = () => {
    const node = document.createElement('div');
    node.classList.add('square');
    return node;
}

document.getElementById('start-play').addEventListener('click', play);

function play() {
    console.log('Lets go');

    

    
    const NUMERO_BOMBE = 16;
    
    const numeroCelle = parseInt(document.getElementById('difficulty').value);
    let cellePerRiga;


    
    const gridElement = document.getElementById('grid');

    grid.innerHTML = '';

    // here we could have used css to create a dimension per square of 50px instead of using cellePerRiga
    let maxAttempts = numeroCelle - NUMERO_BOMBE;
    const arrayTentativi = [];

    cellePerRiga = Math.sqrt(numeroCelle);

    var bombe = generaBombe(NUMERO_BOMBE, numeroCelle);
    console.log('this is bombe' + bombe);

    function generaNumeroBombe (min, max) {
        let getRandomInt = parseInt(Math.floor(Math.random() * (max - min + 1) + min));
        return getRandomInt;
    }
    
    function generaBombe() {
        const bombeGenerate = [];
        console.log('this is bombeGenerate')
        console.log(bombeGenerate)
    
    
        while (bombeGenerate.length < NUMERO_BOMBE) {
            bombeGenerate.push(generaNumeroBombe(1, numeroCelle));

    
            const bomba = generaNumeroBombe(1, numeroCelle);
            if (!bombeGenerate.includes(bomba)) {
                bombeGenerate.push(bomba);

            }
                
        }
    
        return bombeGenerate
        


    
    }
    
    
    

    for (let i = 1; i<=numeroCelle; i++) {

        

        const node = createGridElement(); //<div class="square"></div>
        //console.log(node)
        

        const dimensione = `calc(100% /${cellePerRiga})`;
        node.style.width = dimensione;
        node.style.height = dimensione;
    
        let number = document.createTextNode(i);
        node.appendChild(number)
        
        gridElement.appendChild(node);
        //log numero di tentativi
        //let tentativi = 0;

       // node.addEventListener('click', reveal); 
       node.addEventListener('click', addClick);
        


    };

    function addClick() {
 
        //tentativi += 1;
        //console.log(tentativi);
        //perché non va?

        const cellValue = this.textContent;
        console.log(cellValue);
        //console.log(this)

        const node = this;
        const numeroTentativi = 0;

        if (!bombe.includes(parseInt(cellValue))) {
            node.classList.add('clicked'); 

            arrayTentativi.push(cellValue);
            console.log('this is arrayTentativi' + arrayTentativi)

            node.removeEventListener('click', addClick);

        } else if (arrayTentativi.length == maxAttempts) {
            winGame ()
            

        } else {
            endGame ()
            
            
            setTimeout(function (){
            let text = arrayTentativi.length == 1? 'tentativo.':'tentativi.'
            alert('BOMBA!! Hai perso dopo ' + (arrayTentativi.length) + ' ' + text + ' Gioca di nuovo!'); 

            }, (.5 * 1000));
            
            
            //add this to the HTML
        }


         
        /*} else {
            //alert('Bomba! Hai perso.');
            node.classList.add('clicked-bomb');

            endGame ()

           
            
        };*/

        /*if(valore contenuto in bombe){
            endGame();
           }
           else if(valore non contenuto in array tentativi){
              aggiungo tentativo all'array e controllo la lunghezza dell'array tentativi 
              con il valore della variabile maxAttempts: se sono uguali hai vinto, altrimenti non fai nulla
           }*/
    };

    function winGame () {
        alert('You won!');
        document.getElementById('grid').innerHTML = 'YOU WIN!'
    }

    function endGame () {
        const squares = document.querySelectorAll(".square");

        for (let i = 1; i< squares.length; i++) {
            const singola = squares[i-1];
            console.log('this is singola' + singola)
            if (bombe.includes(i)) {
                singola.classList.add('clicked-bomb');
                singola.innerHTML = `<svg id="bomb-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M440.8 4.994C441.9 1.99 444.8 0 448 0C451.2 0 454.1 1.99 455.2 4.994L469.3 42.67L507 56.79C510 57.92 512 60.79 512 64C512 67.21 510 70.08 507 71.21L469.3 85.33L455.2 123C454.1 126 451.2 128 448 128C444.8 128 441.9 126 440.8 123L426.7 85.33L388.1 71.21C385.1 70.08 384 67.21 384 64C384 60.79 385.1 57.92 388.1 56.79L426.7 42.67L440.8 4.994zM289.4 97.37C301.9 84.88 322.1 84.88 334.6 97.37L363.3 126.1L380.7 108.7C386.9 102.4 397.1 102.4 403.3 108.7C409.6 114.9 409.6 125.1 403.3 131.3L385.9 148.7L414.6 177.4C427.1 189.9 427.1 210.1 414.6 222.6L403.8 233.5C411.7 255.5 416 279.3 416 304C416 418.9 322.9 512 208 512C93.12 512 0 418.9 0 304C0 189.1 93.12 96 208 96C232.7 96 256.5 100.3 278.5 108.3L289.4 97.37zM95.1 296C95.1 238.6 142.6 192 199.1 192H207.1C216.8 192 223.1 184.8 223.1 176C223.1 167.2 216.8 160 207.1 160H199.1C124.9 160 63.1 220.9 63.1 296V304C63.1 312.8 71.16 320 79.1 320C88.84 320 95.1 312.8 95.1 304V296z"/></svg>`
                
            }

            singola.removeEventListener('click', addClick);
            
        }
        


    }
 
    /*for (let i=1; i< numeroCelle.length; i++) {
                this.removeEventListener('click', addClick)
            }*/


    /* LA REGISTRAZIONE DELLA LEZIONE CI CONSIGLIA DI TENERE LA FUNZIONE FUORI DAL CICLO FOR MA WHY??

    function reveal () {
        const t = 0;
        console.log('tentativo' + t);
        
        const cellValue = parseInt(this.querySelector(".square").innerText);
        if (!bombe.includes(parseInt(cellValue))) {
            this.classList.add('clicked');
            //alert('Bomba! Hai perso.');  
        } else {
            this.classList.add('clicked-bomb');    
        };
        this.removeEventListener('click', reveal);
    }; */
    



    //const squares = document.getElementsByClassName('square');

    //for (let x = 0; x <= squares.length; x++) {
   
        //squares.addEventListener('click', function() {

            /*if (!bombe.includes(parseInt(squares[x].innerText))) {
                squares[x].classList.add('clicked');*/
                //continue;


            /*} else if (bombe.includes(parseInt(squares[x].innerText))) {
                squares[x].classList.add('clicked-bomb');
                //squares[bombe].classList.add('clicked-bomb');
                console.log('hai perso');
                console.log(bombe);
                
            };*/ 

       // });
    //};
}