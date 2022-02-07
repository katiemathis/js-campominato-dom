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

        

        const node = createGridElement();
        

        const dimensione = `calc(100% /${cellePerRiga})`;
        node.style.width = dimensione;
        node.style.height = dimensione;
    
        let number = document.createTextNode(i);
        node.appendChild(number)
        
        gridElement.appendChild(node);

       // node.addEventListener('click', reveal); 
        

       node.addEventListener('click', function() {
        if (!bombe.includes(parseInt(node.innerText))) {
           node.classList.add('clicked');    
        } else {
            alert('Bomba! Hai perso.');
            node.classList.add('clicked-bomb');
            console.log('this is node' + node)
        };
    });

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