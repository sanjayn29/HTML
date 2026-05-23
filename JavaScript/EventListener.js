document.getElementById("inc").addEventListener("click",inc);
document.getElementById("dec").addEventListener("click",dec);
document.getElementById("reset").addEventListener("click",reset);
document.getElementById("save").addEventListener("click",save);
document.getElementById("load").addEventListener("click",load);

let count = 0;
function updatecount(){
    document.getElementById("ans").innerHTML=count;
}
function inc(){
    count++;
    updatecount();
}
function dec(){
    count--;
    updatecount();
}
function reset(){
    count = 0;
    updatecount();
}
function save(){
    localStorage.setItem("count",count);                
}
function load(){
    const ans = localStorage.getItem("count");
    if (ans != null){
        count = Number(ans);
    }
    updatecount();
}