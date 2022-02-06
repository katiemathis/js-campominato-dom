
const gridElement = document.getElementById('grid');

const createGridElement = () => {
    const node = document.createElement('div');
    node.classList.add('square');
    return node;
}

document.getElementById('start-play').addEventListener('click', play)

function play() {
    console.log('Lets go');

    const difficoltà = document.getElementById('difficulty').value;
    

    
    let numeroCelle;
    let cellePerRiga;

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
    
    const gridElement = document.getElementById('grid');
    
    
    
    
    


    grid.innerHTML = '';

    for (let i = 1; i<=numeroCelle; i++) {

        const node = createGridElement();

        const dimensione = `calc(100% /${cellePerRiga})`;
        node.style.width = dimensione;
        node.style.height = dimensione;
    
        let number = document.createTextNode(i);
        node.appendChild(number)
        
        
       
        node.addEventListener('click', function() {
            console.log(this);
            this.classList.add('clicked');
    
        });
    
        gridElement.appendChild(node);

        function generaNumeroBombe (min, max) {
            let getRandomInt = parseInt(Math.floor(Math.random() * (max - min + 1) + min));
            return getRandomInt;
        }

        

    
    }

    const NUMERO_BOMBE = 16;

    var bombe = generaBombe(NUMERO_BOMBE, numeroCelle);
    console.log(bombe);
    
    function generaBombe() {
        const bombeGenerate = [];
    
    
        while (bombeGenerate.length < NUMERO_BOMBE) {
            bombeGenerate.push(generaNumeroBombe(1, numeroCelle));

    
            const bomba = generaNumeroBombe(1, numeroCelle);
            if (!bombeGenerate.includes(bomba)) {
                bombeGenerate.push(bomba);
            }
                
        }
    
        return bombeGenerate


    
    }

    function terminaGioco() {

        const squares = document.getElementsByClassName('square');

        for (let i = 0; i < squares.length; i++) {
            if (bombe.includes(parseInt(squares[i].innerText))){
                squares[i].classList.add('clicked-bomb')
            }


        }

        alert('HAI PERSO')
    }


    








}