document.querySelector('button').addEventListener('click', getPictureOfDay)

function getPictureOfDay (){
    const date = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=MMlf5VEZo6dpJFnePlW1QFSyUy5suYBmHbocfOzE&date=${date}`
    fetch (url)
     .then (resp => resp.json ())
     .then (data => {
        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation 
     } )

    }
