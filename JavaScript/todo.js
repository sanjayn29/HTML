let tasks=[];

function addtask(){
    let inputval = document.getElementById("task").value;
    if (inputval == ""){
        alert("please enter a valid task");
        return;
    }
    tasks.push(inputval);
    document.getElementById("task").value = "";
    save();
    display();
}

function display(){
    let html="";
    let l=tasks.length;
    for(let i=0;i<l;i++){
        html+="<li>"+tasks[i]+"     <button type='button' onclick='remove("+i+")'>Remove</button>"+"</li>";
    }
    document.getElementById("list").innerHTML=html;
}
function remove(ind){
    tasks.splice(ind,1);
    save();
    display();
}

function cleantask(){
    tasks=[];
    save();
    display();
}

function save(){
    localStorage.setItem("Tasks",JSON.stringify(tasks));
}

function load(){
    let data = localStorage.getItem("Tasks");
    if (data == null){
        tasks=[];
    }
    else{
    tasks = JSON.parse(data);
    }
    display();
}

window.onload = load;
