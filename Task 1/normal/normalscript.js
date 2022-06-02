let level=1;
let click_loop=0;
let rArr=[];
let click=[];

let duplicateArr=[];

let i=0;
while(i<=15){
    rArr.push(i);
    i++;
}

document.getElementById('score').innerHTML=`<h1>LEVEL - ${level}</h1><h1>SCORE - ${level-1}</h1>`;



function shuffleArray(rArr){
    for(var i=15;i>0;i--){
        var random = Math.floor(Math.random() *(i+1));

        while(!(random in duplicateArr)){
            random = Math.floor(Math.random() *(i+1));
            if(!(random in duplicateArr)){
                break;
            }
        }
        duplicateArr.push(random);

        rArr[random] = (rArr[i]+=rArr[random]-=rArr[i]) - rArr[random];

    }
    return rArr
} 

rArr=shuffleArray(rArr);
div2=document.getElementById('div2');

function clicked(ind){
    click[click_loop]=ind;
    click_loop+=1;
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



function check(){
    console.log(rArr);
    console.log(click);
    let temp=1;
    //let temp=0;
    for(l=0;l<level;l++)
    {
        if(rArr[l]!=click[l])
        {
            temp=0;
        }
        // if(click[l] in rArr){
        //     temp=1;
        // }
    }
    if(temp==1)
    {
        document.getElementById('score').innerHTML=`<h1>LEVEL - ${level+1}</h1><h1>SCORE - ${level}</h1>`;
        level=level+1;
        click_loop=0;
        func_loop(level);
    }

}

func_loop(level);





// function check(){
//     let temp=0;
//     for(l=0;l<level;l++){
//         if(rArr[l] in click.Slice(0,level)){
//             temp++;
//         }
//     }
//     if(temp){
//         document.getElementById('score').innerHTML=`<h1>LEVEL - ${level+1}</h1><h1>SCORE - ${level}</h1>`;
//         level=level+1;
//         click_loop=0;
//         func_loop(level);
//     }
// }





