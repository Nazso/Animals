const cardElements = document.getElementById('cards-list');
const detailsElements = document.getElementById('details-data');
const URL_BIRDS = "http://localhost:3000/birds";

getBirds = async() => {

    const headers = new Headers({
        'Content-Type': 'application/json'
    })

    const options = {
        method: 'GET',
        headers: headers
    }

    const results = await fetch(URL_BIRDS, options)
    const data = await results.json()

    return data;

};

renderBirds = (list) => {
    list.forEach((elem) => {
        
        if(list.indexOf(elem) === 0 || list.indexOf(elem) % 2 === 0) {
            const divEl = `
                <article class="${elem.class}" id="${elem.cardId}">
                    <h3>${elem.title}</h3>
                    <div class="${elem.classConten}">
                        <img src="${elem.img}" alt="photo of ${elem.title}">
                        <ul>
                            <li><strong>Kingdom: </strong> ${elem.Kingdom}</li>
                            <li><strong>Phylum: </strong> ${elem.Phylum}</li>
                            <li><strong>Class: </strong> ${elem.Class}</li>
                            <li><strong>Clade: </strong> ${elem.Clade}</li>
                            <li><strong>Order: </strong> ${elem.Order}</li>
                            <li><strong>Family: </strong> ${elem.Family}</li>
                            <li><strong>Genus: </strong> ${elem.Genus}</li>
                            <li><strong>Species: </strong> ${elem.Species}</li>
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
                        <li><strong>Kingdom: </strong> ${elem.Kingdom}</li>
                        <li><strong>Phylum: </strong> ${elem.Phylum}</li>
                        <li><strong>Class: </strong> ${elem.Class}</li>
                        <li><strong>Clade: </strong> ${elem.Clade}</li>
                        <li><strong>Order: </strong> ${elem.Order}</li>
                        <li><strong>Family: </strong> ${elem.Family}</li>
                        <li><strong>Genus: </strong> ${elem.Genus}</li>
                        <li><strong>Species: </strong> ${elem.Species}</li>
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

};

getBirds()
    .then((data) => {
        console.log(data);
        renderBirds(data);
    })
    .catch((err) => {console.log(err)})




//html - card v_1

    // <article class="cards" id="hbird">
    //             <h3>Ruby-throated Hummingbird</h3>
    //             <div class="cards-content">
    //                 <img src="../Assets/birds/Ruby-throated_Hummingbird.jpg" alt="">
    //                 <ul>
    //                     <li><strong>Kingdom:</strong> Animalia</li>
    //                     <li><strong>Phylum:</strong> Chordata</li>
    //                     <li><strong>Class:</strong> Aves</li>
    //                     <li><strong>Clade:</strong> Strisores</li>
    //                     <li><strong>Order:</strong> Apodiformes</li>
    //                     <li><strong>Family:</strong> Trochilidae</li>
    //                     <li><strong>Genus:</strong> Archilochus</li>
    //                     <li><strong>Species:</strong> A. colubris</li>
    //                 </ul>
    //                 <div class="cards-text">
    //                     <p>
    //                         The ruby-throated hummingbird (Archilochus colubris) is a species of hummingbird that
    //                         generally
    //                         spends the winter in Central America, Mexico, and Florida, and migrates to Canada and other
    //                         parts of Eastern North America for the summer to breed. It is by far the most common
    //                         hummingbird
    //                         seen east of the Mississippi River in North America.
    //                     </p>
    //                     <p>
    //                         <h3>Description</h3>
    //                         The species is sexually dimorphic. The adult male has a gorget (throat patch) of iridescent ruby
    //                         red bordered
    //                         narrowly with velvety black on the upper margin and a forked black tail with a faint violet
    //                         sheen. The red iridescence
    //                         is highly directional and appears dull black from many angles. The female has a notched tail
    //                         with outer feathers banded
    //                         in green, black, and white and a white throat that may be plain or lightly marked with dusky
    //                         streaks or stipples. Males
    //                         are smaller than females and have slightly shorter bills. Juvenile males resemble adult females,
    //                         though usually with
    //                         heavier throat markings. The plumage is molted once a year on the wintering grounds, beginning
    //                         in early fall and
    //                         ending by late winter.
    //                     </p>
    //                 </div>
    //             </div>
    //         </article>