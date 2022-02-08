const gridElement = document.getElementById('grid');

const createGridElement = () => {
    const node = document.createElement('div');
    node.classList.add('square');
    return node;
}

document.getElementById('start-play').addEventListener('click', play);

function play() {
    console.log('Lets go');

    

    const difficoltà = document.getElementById('difficulty').value;
    
    const NUMERO_BOMBE = 16;
    
    let numeroCelle;
    let cellePerRiga;


    
    const gridElement = document.getElementById('grid');

    grid.innerHTML = '';

    switch (difficoltà) {
        case 'Easy':
            numeroCelle = 100;
            break;
        case 'Hard':
            numeroCelle = 81;
            break;
        case 'Crazy':
            numeroCelle = 49;
            break;
    }
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
            console.log('hai fatto ' + (arrayTentativi.length + 1) + ' tentativi.')
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
    }

    function endGame () {
        const squares = document.querySelectorAll(".square");
        //console.log(squares)

        for (let i = 1; i< squares.length; i++) {
            const singola = squares[i-1];
            console.log('this is singola' + singola)
            if (bombe.includes(i)) {
                singola.classList.add('clicked-bomb');
                
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