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

    })

}

getReptiles()
    .then((data) => {
        renderReptiles(data)
    })
    .catch((err) => {console.log(err)})