// api
const API = 'https://randomuser.me/api/?results=9'

// for leader
const overlay = document.getElementById('overlay');

function looderToggle(toggle) {
    if(toggle) {
        overlay.classList.remove('hidden')
    } else {
        overlay.classList.add('hidden')
    }
}

const getData = (resourse)=> {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", ()=> {
            if(request.readyState < 4) {
                looderToggle(true)
            } else if (request.readyState == 4 && request.status == 200) {
                const data = JSON.parse(request.responseText)
                resolve(data.results);
                looderToggle(false)
            } else if (request.readyState == 4) {
                reject('error')
                looderToggle(false)
            }
        })

        request.open("GET", resourse);
        request.send();
    })
}

const reload = () => {
    getData(API).then((data) => {
        console.log(data)
    }).catch((err)=> {
        console.log('Error', err)
    })
}

document.addEventListener('DOMContentLoaded', reload)