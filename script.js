const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)
generateJoke()

// Using Async Await 

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const response =  await fetch('https://icanhazdadjoke.com', config)
  const data = await response.json()
  jokeEl.innerHTML = data.joke
  
}


// Using .then fetch

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//   .then((response) => response.json())
//   // .then((data) => console.log(data))
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }