const form = document.querySelector('form')

const getAge = (event) => {
    event.preventDefault(); // prevents the page from 
    // refreshing after submitting the form

    const date = document.getElementById('date').value
    // const currentDate = new Date ()
    const dateOfBirth = new Date(date)

    const currentDate = new Date()
let age = currentDate.getFullYear() - dateOfBirth.getFullYear()


// chech if we have reached the month the peson was born
if(dateOfBirth.getMonth() > currentDate.getMonth()){
    age = age - 1
}

// if we have reached the month, chech if we have reached the date the peson was born
else if(dateOfBirth.getMinutes = currentDate.getMonth() 
    && dateOfBirth.getDate > currentDate.getDate()){
  age = age - 1;
}



alert(`You are ${age} year old`)

}





// const data = document.getElementById('date').value

