const cardElements = document.getElementById('cards-list');
const detailsElements = document.getElementById('details-data');
const URL_REPTILES = "http://localhost:3000/reptiles";

const getReptiles = async() => {

    const headers = new Headers({
        'Content-Type': 'application/json'
    })

    const options = {
        method: 'GET',
        headers: headers
    }

    const results = await fetch(URL_REPTILES, options)
    const data = await results.json()

    return data;

}

const renderReptiles = (list) => {

    list.forEach((elem) => {

        if(list.indexOf(elem) === 0 || list.indexOf(elem) % 2 === 0) {

            const divEl = `
                <article class="${elem.class}" id="${elem.cardId}">
                    <h3>${elem.title}</h3>
                    <div class="${elem.classConten}">
                        <img src="${elem.img}" alt="photo of ${elem.title}">
                        <ul>
                            <li><strong>Breed: </strong> 
                                <p>${elem.Kingdom}</p>
                            </li>
                            <li><strong>Location of origin: </strong> 
                                <p>${elem.Phylum}</p>
                            </li>
                            <li><strong>Type: </strong> 
                                <p>${elem.Class}</p>
                            </li>
                            <li><strong>Body type: </strong> 
                                <p>${elem.Clade}</p>
                            </li>
                            <li><strong>Coat type and length: </strong> 
                                <p>${elem.CladeTwo}</p>
                            </li>
                            <li><strong>Coat pattern: </strong> 
                                <p>${elem.CladeThree}</p>
                            </li>
                            <li><strong>Coat pattern: </strong> 
                                <p>${elem.Order}</p>
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
                    <p>${elem.Kingdom}</p>
                </li>
                <li><strong>Location of origin: </strong> 
                    <p>${elem.Phylum}</p>
                </li>
                <li><strong>Type: </strong> 
                    <p>${elem.Class}</p>
                </li>
                <li><strong>Body type: </strong> 
                    <p>${elem.Clade}</p>
                </li>
                <li><strong>Coat type and length: </strong> 
                    <p>${elem.CladeTwo}</p>
                </li>
                <li><strong>Coat pattern: </strong> 
                    <p>${elem.CladeThree}</p>
                </li>
                <li><strong>Coat pattern: </strong> 
                    <p>${elem.Order}</p>
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

getReptiles()
    .then((data) => {
        console.log(data)
        renderReptiles(data)
    })
    .catch((err) => {console.log(err)})