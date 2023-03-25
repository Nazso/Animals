const cardElements = document.getElementById('cards-list');
const detailsElements = document.getElementById('details-data');
const URL_DOGS = "http://localhost:3000/dogs";

getDogs = async() => {

    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const options = {
        method: 'GET',
        headers: headers
    }

    const results = await fetch(URL_DOGS, options);
    const data = results.json();

    return data;

}

renderDogs = (list) => {

    list.forEach((elem) => {
        if(list.indexOf(elem) === 0 || list.indexOf(elem) % 2 === 0) {

            const el = `

            `

            cardElements.innerHTML += el;

        } else {

            const el = `
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
                        <li><strong>Height: </strong> 
                            <p>${elem.Breed}</p>
                            <p>${elem.Breed}</p>
                        </li>
                        <li><strong>Weight: </strong> 
                            <p>${elem.LocationOfOrigin}</p>
                            <p>${elem.LocationOfOrigin}</p>
                        </li>
                        <li><strong>Coat: </strong> 
                            <p>${elem.Type}</p>
                        </li>
                        <li><strong>Color: </strong> 
                            <p>${elem.BodyType}</p>
                        </li>
                        <li><strong>Life span: </strong> 
                            <p>${elem.CoatTypeAndLength}</p>
                        </li>
                    </ul>
                        <img src="${elem.img}" alt="photo of ${elem.title}">
                    </div>
                </article>
            `

            cardElements.innerHTML += el;
        }

        const detailsEl = `
            <li>
            <a href="#${elem.cardId}">${elem.title}</a>
            <img src="${elem.img}" alt="photo of ${elem.title}">
            </li>
        `

        detailsElements += detailsEl
    })
}


getDogs()
    .then((data) => {
        renderDogs(data)
    })
    .catch((err) => {console.log(err)})
