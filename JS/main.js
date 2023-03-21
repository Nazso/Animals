const cardElements = document.getElementById('cards-list');
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
        const divEl = `
            <article>
                <h3></h3>
                <div>
                    <img src="">
                    <ul>
                    
                    </ul>
                </div>
            </article>
        `
        cardElements.innerHTML += divEl;
    })

};

getBirds()
    .then((data) => {
        console.log(data);
        renderBirds(data);
    })
    .catch((err) => {console.log(err)})




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