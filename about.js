const randNr = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min
}


const motto = ["it", "is", "what", "it", "is."];
const panelBackgrounds = [
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Paolo_Monti_-_Servizio_fotografico_%28Napoli%2C_1969%29_-_BEIC_6353768.jpg",

    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Chrysippos_BM_1846.jpg",

    "https://www.der-roemer-shop.de/media/image/product/979/md/seneca-lucius-annaeus-bueste~5.jpg",

    "https://images.squarespace-cdn.com/content/v1/5ceef4e202ffea0001e29793/1581693828730-RHC56JEL04NA2G7FYNWG/epicitetus+wilnash+care.jpg",

    "https://hips.hearstapps.com/hmg-prod/images/marcus-aurelius-gettyimages-122316830.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
];


export const about = () => {
    document.querySelector(".panels").addEventListener("click", toggleOpen);

    motto.forEach(item =>
        document.querySelector('.panels').innerHTML += `<div class="panel"> ${item}</div>`)

    const panelsNodeList = document.querySelectorAll('.panel')
    panelsNodeList.forEach((panel, i) =>
        panel.style.backgroundImage = `url(${panelBackgrounds[i]})`)

    function toggleOpen(e) {

        if (e.target.classList.contains('open'))
            e.target.classList.remove('open')
        else {
            panelsNodeList.forEach(obj => obj.classList.remove('open'))
            e.target.classList.add('open');
        }
    }
}