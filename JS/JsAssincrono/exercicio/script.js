const baseURL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

async function getCat() {
    const data = await fetch(baseURL)
        .then(res => res.json())
        .catch (e => console.log(e));

    return data.webpurl;
};

const loadImg = async () => {
    catImg.src = await getCat();
};

catBtn.addEventListener('click', loadImg);

loadImg();