
const jokes = document.querySelector('.loading');
const jokebtn = document.querySelector('.button');

// DONE USING PROMISES

// const generatejokes = () => {
//     const setHeader = {
//         headers: {
//             Accept : "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', setHeader)
//     .then((response)=> response.json())
//     .then((data)=> jokes.innerHTML = data.joke)
//     .catch((error)=>{
//         console.log(error)
//     })
// }
// jokebtn.addEventListener('click', generatejokes);
// generatejokes();

// USING ASYNC AWAIT

const generatejokes = async () => {
    try{
        const setHeader = {
            headers: {
                Accept : "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com/', setHeader)
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }
    catch(error){
        console.log(`The error is ${error}`)
    }
    
}
jokebtn.addEventListener('click', generatejokes);
generatejokes();