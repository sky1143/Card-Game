

let money =50;

let previousRandomNumber = null;

function betUp(){
    var randomNumber= Math.floor(Math.random()*13)+1;
    var randomImageSource = "images/card"+randomNumber+".jpeg";
    document.querySelectorAll('img')[0].setAttribute("src",randomImageSource);

    console.log("Generated random no :",randomNumber);

    if(previousRandomNumber===null){
        previousRandomNumber = randomNumber
        document.querySelector("h2.score").innerHTML =`Place your first bet!`;
        return;
    }
    money -=10;

    if(randomNumber>previousRandomNumber){
       money+=20;
       document.querySelector("h2.score").innerHTML = `You won our money :<span style="color: green;"> $${money}</span></>`;
    }else if(randomNumber<previousRandomNumber){
        document.querySelector("h2.score").innerHTML = `You loose! Your money :<span style="color: red;"> $${money}</span>`;
    }else{
        document.querySelector("h2.score").innerHTML = ` Draw Your money :<span style="color: grey;"> $${money}</span>`;
    }

    previousRandomNumber =randomNumber;

    if(money<=0){
        document.querySelector("h2.score").innerHTML = `Game over! you ran out of money. `;
        document.querySelector(".btn1").disabled= true;
    }
}

function betDown(){

    var randomNumber =Math.floor(Math.random()*13)+1;
    var randomImageSource ="images/card"+randomNumber+".jpeg";
    document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);
    
if(previousRandomNumber===null){
    previousRandomNumber=randomNumber
    document.querySelector("h2.score").innerHTML= ` Place your first bet`
}

money-=10;

if(randomNumber<previousRandomNumber){
    money +=20;
    document.querySelector("h2.score").innerHTML =`You won! Your money :<span style="color: green;"> $${money}</span>`
}else if(randomNumber>previousRandomNumber){
    document.querySelector("h2.score").innerHTML = `You loose! Your Money :<span style="color: red;"> $${money}</span>`;
}else{
    document.querySelector("h2.score").innerHTML =`Draw! Your Money : <span style="color: grey;"> $${money}</span>` 
}
previousRandomNumber=randomNumber;

if(money<=0){
    document.querySelector("h2.score").innerHTML = `Game Over! You ran out of money`
    document.querySelector(".btn2").disabled=true;
}

 }
