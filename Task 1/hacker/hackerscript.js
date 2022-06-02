//-----------------TIMER----------------//

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;
let timerFlag=0;

timerRef.innerHTML = `<h1> TIMER - 00 : 00 : 00 : 000`;

document.getElementById('startTimer').addEventListener('click',clicked);

document.getElementById('stopTimer').addEventListener('click',() => {
    if(level>17){
        clearInterval(int);
    }
});


function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    if(timerFlag==1){
        timerRef.innerHTML = `<h1> TIMER - ${h} : ${m} : ${s} : ${ms}</h1>`;
    }
    
}

//--------------------------------------//



let level=1;
let click_loop=0;
let rArr=[];
let click=[];

let i=0;
while(i<=35){
    rArr.push(i);
    i++;
}

document.getElementById('score').innerHTML=`<h1>LEVEL - ${level}</h1><h1>SCORE - ${level-1}</h1>`;



function shuffleArray(rArr){
    for(var i=15;i>0;i--){
        var random = Math.floor(Math.random() *(i+1));
        rArr[random] = (rArr[i]+=rArr[random]-=rArr[i]) - rArr[random];
    }
    return rArr
} 
rArr=shuffleArray(rArr);
div2=document.getElementById('div2');



function clicked(ind){
    click[click_loop]=ind;
    click_loop+=1;

    //----TIMER----
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
    //----TIMER----
}
function func_loop(level){
    if(level<=16){
        click=[];
        for(k=0;k<level;k++){   
            setTimeout(func,1000*k,rArr[k]);
        }

        function func(ind2)
        {
            document.getElementById(`button${ind2}`).style="background-color:white;";
            // document.getElementById(`button${ind2}`).animate= "tileAnimate 2 ";
            
            setTimeout(func2,1000,ind2)
        }

        function func2(Ind1)
        {
            document.getElementById(`button${Ind1}`).style="background-color:rgba(10, 1, 1, 0.994);";
        } 
        setInterval(check,1200*level);
    }
    else{
        document.getElementById('score').innerHTML="<h1>You have succesfully completed the game <br> reset the page to play again</h1>";
    }
    
}
function check()
{
    let temp=1;
    for(l=0;l<level;l++)
    {
        if(rArr[l]!=click[l])
        {
            temp=0;
        }
    }
    if(temp==1)
    {
        document.getElementById('score').innerHTML=`<h1>LEVEL - ${level+1}</h1><h1>SCORE - ${level}</h1>`;
        timerFlag=1;
        displayTimer();

        level=level+1;
        click_loop=0;
        func_loop(level);
    }
}
func_loop(level);



