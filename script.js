let loader = document.querySelector(".loader");
let all = document.querySelector(".all");
let Quest = document.getElementsByClassName("ques");
let btn = document.getElementsByTagName("button");

setTimeout(function(){
    loader.classList.add("unactive");
    all.classList.add("active");
}, 2000);
let radioClicked = false;
let radioClickedt = false;
let radioClickedw = false;
let radioClickedn = false;
let radioClickedo = false;
let btnClick = false;
let active = 0;

document.querySelectorAll('.btn').forEach((button) => {
        
    button.addEventListener("click",function () {
        
        if(this.className.includes("first")){
            if( !radioClicked ){
                radioClicked = true;
                this.style.background = "coral"
                this.style.color = "#fff"
                switch(this.value){
                    case "true":
                        active++;
                        set();
                        break;
                    case "":
                        break;
                }
            }
        }else if(this.className.includes("second")){
            if( !radioClickedt ){
                radioClickedt = true;
                this.style.background = "coral"
                this.style.color = "#fff"
                switch(this.value){
                    case "true":
                        active++;
                        set()
                        break;
                    case "":
                        break;
                }
            }
        }else if(this.className.includes("third")){
            if( !radioClickedo ){
                radioClickedo = true;
                this.style.background = "coral"
                this.style.color = "#fff"
                switch(this.value){
                    case "true":
                        active++;
                        set()
                        break;
                    case "":
                        break;
                }
            }
        }else if(this.className.includes("fort")){
            if( !radioClickedn ){
                radioClickedn = true;
                this.style.background = "coral"
                this.style.color = "#fff"
                switch(this.value){
                    case "true":
                        active++;
                        set()
                        break;
                    case "":
                        break;
                }
            }
        }else if(this.className.includes("fift")){
            if( !radioClickedw ){
                radioClickedw = true;
                this.style.background = "coral"
                this.style.color = "#fff"
                switch(this.value){
                    case "true":
                        active++;
                        set()
                        break;
                    case "":
                        break;
                }
            }
        }
    })
    function set() {
        document.querySelector(".main-score").innerHTML = active;
    }
})
/*for(let i = 0; i < btn.length; i++){
    let button = btn[i];    
    button.addEventListener("click",function() {
        
        if(this.className.includes("first")){
            if( !radioClicked ){
                radioClicked = true;
                this.style.background = "coral"
                this.style.color = "#fff"
                switch(this.value){
                    case "true":
                        active++;
                        set();
                        break;
                    case "":
                        break;
                }
            }
        }
        if(this.className.includes("second")){
            if( !radioClickedt ){
                radioClickedt = true;
                this.style.background = "coral"
                this.style.color = "#fff"
                switch(this.value){
                    case "true":
                        active++;
                        set()
                        break;
                    case "":
                        break;
                }
            }
        }
        if(this.className.includes("third")){
            if( !radioClickedo ){
                radioClickedo = true;
                this.style.background = "coral"
                this.style.color = "#fff"
                switch(this.value){
                    case "true":
                        active++;
                        set()
                        break;
                    case "":
                        break;
                }
            }
        }
        if(this.className.includes("fort")){
            if( !radioClickedn ){
                radioClickedn = true;
                this.style.background = "coral"
                this.style.color = "#fff"
                switch(this.value){
                    case "true":
                        active++;
                        set()
                        break;
                    case "":
                        break;
                }
            }
        }
        if(this.className.includes("fift")){
            if( !radioClickedw ){
                radioClickedw = true;
                this.style.background = "coral"
                this.style.color = "#fff"
                switch(this.value){
                    case "true":
                        active++;
                        set()
                        break;
                    case "":
                        break;
                }
            }
        }
    })
    function set() {
        document.querySelector(".main-score").innerHTML = active;
    }
}*/
let nextBtn = document.querySelector(".sets-btn");
let seeScore = document.querySelector(".see-score");
let scoreSet = document.querySelector(".score");
seeScore.addEventListener("click", () => {
    scoreSet.classList.add("on")
    nextBtn.classList.add("display")
})
setTimeout(function(){
    scoreSet.classList.add("on")
}, 500000);
let activePlayer = Math.floor(Math.random() * 5);
function questions() {
    for(let i = 0; i < Quest.length; i++){
        let quesTion = Quest[i];

        let act = document.querySelector(".one-"+ activePlayer)
        act.style.display = "flex";
        nextBtn.addEventListener("click", () => {
            window.location.reload();
        })
    }
}
questions();

/*function un() {
    let firstQ = document.querySelector(".one-1")
let Quest = document.getElementsByClassName("ques")
    if(arr.length > 0){
        arr = [].reduce(add,0);
        function add(accumulator, a){
            return accumulator + a;
        }
    }
    function addUp() {
        arr.push(2);
    }
    let arr = [];
    set.reduce(add,0);
function add(accumulator, a){
    return accumulator + a;
}
}*/