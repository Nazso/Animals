const cardElements = document.getElementById('cards-list');
const detailsElements = document.getElementById('details-data');
const URL_CATS = "http://localhost:3000/cats";

getCats = async() => {

    const headers = new Headers({
        'Content-Type': 'application/json'
    })

    const options = {
        method: 'GET',
        headers: headers
    }

    const results = await fetch(URL_CATS, options);
    const data = await results.json()

    return data;

}

renderCats = (list) => {

    list.forEach((elem) => {

        if(list.indexOf(elem) === 0 || list.indexOf(elem) % 2 === 0) {
            const divEl = `
                <article class="${elem.class}" id="${elem.cardId}">
                    <h3>${elem.title}</h3>
                    <div class="${elem.classConten}">
                        <img src="${elem.img}" alt="photo of ${elem.title}">
                        <ul>
                            <li><strong>Breed: </strong> 
                                <p>${elem.Breed}</p>
                            </li>
                            <li><strong>Location of origin: </strong> 
                                <p>${elem.LocationOfOrigin}</p>
                            </li>
                            <li><strong>Type: </strong> 
                                <p>${elem.Type}</p>
                            </li>
                            <li><strong>Body type: </strong> 
                                <p>${elem.BodyType}</p>
                            </li>
                            <li><strong>Coat type and length: </strong> 
                                <p>${elem.CoatTypeAndLength}</p>
                            </li>
                            <li><strong>Coat pattern: </strong> 
                                <p>${elem.CoatPattern}</p>
                            </li>
                        </ul>
                        <div class="${elem.classText}">
                            <p>${elem.pOne}</p>
                            <p>
                                <h3>Description: </h3>
                                ${elem.pTwo}
                            </p>
                        </div>
                    </div>
                </article>
            `
            cardElements.innerHTML += divEl;
        } else {
            const divEl = `
                <article class="${elem.class}" id="${elem.cardId}">
                    <h3>${elem.title}</h3>
                    <div class="${elem.classConten}">
                    <div class="${elem.classText}">
                        <p>${elem.pOne}</p>
                        <p>
                            <h3>Description: </h3>
                            ${elem.pTwo}
                        </p>
                    </div>
                    <ul>
                        <li><strong>Breed: </strong> 
                            <p>${elem.Breed}</p>
                        </li>
                        <li><strong>Location of origin: </strong> 
                            <p>${elem.LocationOfOrigin}</p>
                        </li>
                        <li><strong>Type: </strong> 
                            <p>${elem.Type}</p>
                        </li>
                        <li><strong>Body type: </strong> 
                            <p>${elem.BodyType}</p>
                        </li>
                        <li><strong>Coat type and length: </strong> 
                            <p>${elem.CoatTypeAndLength}</p>
                        </li>
                        <li><strong>Coat pattern: </strong> 
                            <p>${elem.CoatPattern}</p>
                        </li>
                    </ul>
                        <img src="${elem.img}" alt="photo of ${elem.title}">
                    </div>
                </article>
            `
            cardElements.innerHTML += divEl;
        }

        const detailsEl = `
            <li>
            <a href="#${elem.cardId}">${elem.title}</a>
            <img src="${elem.img}" alt="photo of ${elem.title}">
            </li>
        `
        detailsElements.innerHTML += detailsEl;
    })
    
}

getCats()
    .then((data) => {
        renderCats(data);
    })
    .catch((err) => {console.log(err)})