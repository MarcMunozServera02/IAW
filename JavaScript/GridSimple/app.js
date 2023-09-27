const containerComics = document.querySelector('#container-comics');

// Init function
document.addEventListener("DOMContentLoaded", () => {
    getDataComics();
});

// Get Comics JSON file
const getDataComics = async () => {
    try {
        const res = await fetch('./data.json');
        const data = await res.json();
        console.log(data);
        populateComics(data);
    } catch (error) {
        console.log("Error loading data:", error);
    }
};

// Populate main grid width every comics information
const populateComics = (dataJSON) => {
    const template = document.querySelector('#template-comics').content;
    const fragment = document.createDocumentFragment();

    dataJSON.forEach(comic => {
       
        template.querySelector('img').setAttribute('src', "img/" + comic.img);
        template.querySelector('h5').textContent = comic.title;
        template.querySelector('p').textContent = comic.cartoonist;

        // node template must be cloned to ensure a good performace
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    containerComics.appendChild(fragment);
};