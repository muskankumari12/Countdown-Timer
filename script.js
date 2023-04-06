/*use date object of javaScript */

const endDate = "12 April 2023 1:00 AM"
document.getElementById('end_date').innerText = endDate;

// const clock= () =>{

// }
const inputs = document.querySelectorAll('input')

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = Math.floor((end - now)/1000);
    console.log(inputs[0].value = Math.floor(diff / 3600 / 24));
    console.log(inputs[1].value= Math.floor(diff / 3600 % 24));
    console.log(inputs[2].value = Math.floor(diff / 60) % 60 );
    console.log(inputs[3].value = Math.floor(diff % 60));

    
}
clock()