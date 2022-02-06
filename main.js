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
    console.log(bombe);

    function generaNumeroBombe (min, max) {
        let getRandomInt = parseInt(Math.floor(Math.random() * (max - min + 1) + min));
        return getRandomInt;
    }
    
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
    
    


    for (let i = 1; i<=numeroCelle; i++) {

        const node = createGridElement();

        const dimensione = `calc(100% /${cellePerRiga})`;
        node.style.width = dimensione;
        node.style.height = dimensione;
    
        let number = document.createTextNode(i);
        node.appendChild(number)
        
        gridElement.appendChild(node);

        const squares = document.getElementsByClassName('square');

        for (let i = 0; i < squares.length; i++) {
       
            node.addEventListener('click', function() {
                this.classList.add('clicked');

                if (bombe.includes(parseInt(squares[i].innerText))) {
                    squares[i].classList.add('clicked-bomb');
                    console.log('hai perso');
                    
                };  

            });

        }


        

    }
}