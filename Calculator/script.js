const text = document.getElementById('text');
const equal = document.getElementById('equal');
const btns = document.getElementsByClassName('btn');
const cbtn = document.getElementById('c');
const operators = document.getElementsByClassName('operators');
function render(){
    text.value = eval(text.value);

}
function a(value){
    text.value+=value;
}

cbtn.addEventListener('click',function(){
    text.value="";
});
equal.addEventListener('click' , render);
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('click',function(){
        a(this.textContent);
    })    
}
console.log(operators)
for(const key in operators){
    console.log(key)
    key.addEventListener('click' , function(){
        a(this.textContent);
    })
}
