const dogContainer = document.getElementById('dog-container');
const randomDog = document.getElementById('random-dog');
const url = ('https://dog.ceo/api/breeds/image/random')



function getRaceDog(){
    const url = 'https://dog.ceo/api/breeds/list/all'
    fetch(url)
    .then(data => data.json())
    .then(data => {
        const raceSelector = document.getElementById('race')
        
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.text = 'Choisir une race de chien';
        raceSelector.appendChild(defaultOption);

        for (const breed in data.message) {
            const option = document.createElement('option')
            option.value = breed;
            option.text = breed;
            raceSelector.appendChild(option)
        }
    })
    .catch(error => console.log("Erreur : " + error));
}

function selectRaceDog() {
    const breedSelector = document.getElementById('race');
    const selectedBreed = breedSelector.value;
    if (selectedBreed) {
        const url = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const dogImage = document.querySelector('.dog-image');
                dogImage.src = data.message;
            })
            .catch(error => console.log("Erreur : " + error));
    }
}

function getRandomDog(){
fetch(url)
    .then(data => data.json())
    .then (data => {
       const img = document.createElement('img');
        img.src = data.message;
        const existingImages = document.querySelectorAll('.dog-image');
        existingImages.forEach(existingImage => {
            dogContainer.removeChild(existingImage);
        });
        img.classList.add('dog-image');
        img.style.width= '500px'
        img.style.height= '500px'
        dogContainer.appendChild(img);

    })
    .catch(error => console.log("Erreur : " + error));
    

}


function handleButtonClick() {
    getRandomDog();
    selectRaceDog();
}

dogContainer.style.backgroundColor = 'blue';
dogContainer.style.width = '500px'
dogContainer.style.height = '500px'

randomDog.addEventListener('click', handleButtonClick);

getRaceDog()
