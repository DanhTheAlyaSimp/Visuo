const div1 = document.getElementById("progress-div-1")
const div2 = document.getElementById("progress-div-2")
const div3 = document.getElementById("progress-div-3")

progressBars = [div1,div2,div3]

tasks = {
    "placeholder1":1,
    "placeholder2":24,
    "placeholder3":8760,
}
taskList = Object.keys(tasks)

let valid = false
document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault()

    resetProgressBars()
    alert("Bar reset!")

    const form = e.target;
    const hours = form.hours.value;
    const label = document.getElementById("status")
    alert("Form result got! Value: "+hours)
    if(!isNaN(hours) && hours.trim() !==""){
        label.textContent = `Here is what you can achieve with your ${hours} hours per day productivity!`
        updateProgressBars(parseFloat(hours))
    }
    else if(typeof hours === "string"){
        label.textContent = "U can't even type a number? Can't be useful!"
    }
    else{
        label.textContent = "What is even that data type..."
    }
})  

function updateProgressBars(hours) {
    for(let i=0;i<progressBars.length;i+=1){
        taskKey = taskList[i]
        progress = Math.min((hours/tasks[taskKey])*100,100)
        progressBars[i].style.width = progress + "%"
    }
}

function resetProgressBars() {
    progressBars.forEach(bar => {
        bar.style.width = '0%';
    });
}