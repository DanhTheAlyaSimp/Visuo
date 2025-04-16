document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault()

    const form = e.target;
    const hours = form.hours.value;

    if(!isNaN(hours) && hours.trim() !==""){
        alert("Good")
        alert(`Bro is bragging about working ${hours} hours a day`)
    }
    else if(typeof hours === "string"){
        alert("U can't even type a number? Can't be useful!")
    }
    else{
        alert("What is even that data type...")
    }

    
})