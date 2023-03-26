const cardElements = document.getElementById('cards-list');
const detailsElements = document.getElementById('details-data');
const URL_DOGS = "http://localhost:3000/dogs";

const getDogs = async() => {

    const headers = new Headers({
        'Content-Type': 'application/json'
    })

    const options = {
        method: 'GET',
        headers: headers
    }

    const results = await fetch(URL_DOGS, options);
    const data = await results.json()

    return data;

}

const renderDogs = (list) => {

    list.forEach((elem) => {

        if(list.indexOf(elem) === 0 || list.indexOf(elem) % 2 === 0) {
            const divEl = `
                <article class="${elem.class}" id="${elem.cardId}">
                    <h3>${elem.title}</h3>
                    <div class="${elem.classConten}">
                        <img src="${elem.img}" alt="photo of ${elem.title}">
                        <ul>
                            <li><strong>Height: </strong> 
                                <p>${elem.HeightMale}</p>
                                <p>${elem.HeightFemale}</p>
                            </li>
                            <li><strong>Weight: </strong> 
                                <p>${elem.WeightMale}</p>
                                <p>${elem.WeightFemale}</p>
                            </li>
                            <li><strong>Coat: </strong> 
                                <p>${elem.Coat}</p>
                            </li>
                            <li><strong>Color: </strong> 
                                <p>${elem.Color}</p>
                            </li>
                            <li><strong>Life span: </strong> 
                                <p>${elem.LifeSpan}</p>
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
                        <li><strong>Height: </strong> 
                            <p>${elem.HeightMale}</p>
                            <p>${elem.HeightFemale}</p>
                        </li>
                        <li><strong>Weight: </strong> 
                            <p>${elem.WeightMale}</p>
                            <p>${elem.WeightFemale}</p>
                        </li>
                        <li><strong>Coat: </strong> 
                            <p>${elem.Coat}</p>
                        </li>
                        <li><strong>Color: </strong> 
                            <p>${elem.Color}</p>
                        </li>
                        <li><strong>Life span: </strong> 
                            <p>${elem.LifeSpan}</p>
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

    // list.forEach((elem) => {

    //     if(list.indexOf(elem) % 2 === 0) {

    //         const divEl = `
                //  <article class="${elem.class}" id="${elem.cardId}">
                //     <h3>${elem.title}</h3>
                //     <div class="${elem.classConten}">
                //         <img src="${elem.img}" alt="photo of ${elem.title}">
                //         <ul>
                //             <li><strong>Height: </strong> 
                //                 <p>${elem.HeightMale}</p>
                //                 <p>${elem.HeightFemale}</p>
                //             </li>
                //             <li><strong>Weight: </strong> 
                //                 <p>${elem.WeightMale}</p>
                //                 <p>${elem.WeightFemale}</p>
                //             </li>
                //             <li><strong>Coat: </strong> 
                //                 <p>${elem.Coat}</p>
                //             </li>
                //             <li><strong>Color: </strong> 
                //                 <p>${elem.Color}</p>
                //             </li>
                //             <li><strong>Life span: </strong> 
                //                 <p>${elem.LifeSpan}</p>
                //             </li>
                //         </ul>
                //         <div class="${elem.classText}">
                //             <p>${elem.pOne}</p>
                //             <p>
                //                 <h3>Description: </h3>
                //                 ${elem.pTwo}
                //             </p>
                //         </div>
                //     </div>
                // </article>
    //         `

    //         cardElements.innerHTML += divEl;

    //     } else {


    //         cardElements.innerHTML += divEl;
    //     }

    //     const detailsEl = `
    //         <li>
    //             <a href="#${elem.cardId}">${elem.title}</a>
    //             <img src="${elem.img}" alt="photo of ${elem.title}">
    //         </li>
    //     `

    //     detailsElements += detailsEl;
    // });
}


getDogs()
    .then((data) => {
        console.log(data)
        renderDogs(data)
    })
    .catch((err) => {console.log(err)})
