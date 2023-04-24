console.log("Client side javascript file is loaded!");

// CORS problem :/
// fetch('http://puzzle.mead.io/puzzle', {
//     mode: 'no-cors',
//     headers: {
//          "Content-Type": "application/json"
//     },
// }).then((resonse) => {
//     resonse.json().then((data) => {
//         console.log(data);
//     });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    fetch('http://localhost:3000/' + location).then((response) => {
        response.json().then((data) => {
            if (!data.error) {
                console.log(data.error);
            } else {
                console.log(data.location);
                console.log(data.forecast);
            }
        });
    });
});