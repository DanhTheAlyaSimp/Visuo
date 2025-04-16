document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault()

    const form = e.target;
    const hours = form.hours.value;
    const label = document.getElementById("status")
    if(!isNaN(hours) && hours.trim() !==""){
        label.textContent = `Here is what you can achieve with your ${hours} hours per day productivity!`
    }
    else if(typeof hours === "string"){
        label.textContent = "U can't even type a number? Can't be useful!"
    }
    else{
        label.textContent = "What is even that data type..."
    }

    
})