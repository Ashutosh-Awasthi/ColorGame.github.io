var buttons=document.querySelectorAll(".colBlocks");
var Head = document.querySelector("h1");
var Head_span=document.querySelector("span");
var reset_button=document.querySelector("#Reset");
var msg=document.querySelector("#message");
var rgb = [];
var Q_color;
var easy=document.querySelector("#easy");    
var No_of_blocks = 6; 
easy.textContent="mode 1";                                                                                                                                                                                                                                                                                                                    
R_color();
pickClr();

reset_button.addEventListener("click",reset);
easy.addEventListener("click",function(){
    if(No_of_blocks===6) 
    {
        No_of_blocks=3;
        easy.classList.add("btn-outline-warning");
        easy.classList.remove("btn-outline-danger");
    }
    else if(No_of_blocks===3) 
    {
        No_of_blocks=2;
        easy.classList.add("btn-outline-success");
        easy.classList.remove("btn-outline-warning");
    }
    else{
        No_of_blocks=6;
        easy.classList.add("btn-outline-danger");
        easy.classList.remove("btn-outline-success");
    }
    mode();
});

for(i=0; i<No_of_blocks; i++)
{
    buttons[i].style.backgroundColor=rgb[i];
    
    buttons[i].addEventListener("click",function(){
        reset_button.textContent="Start Again";
        if(this.style.backgroundColor===Q_color)
        {
            for(j=0;j<No_of_blocks;j++)
                buttons[j].style.backgroundColor=Q_color;
            msg.textContent="Correct";
            Head.style.background=Q_color;
        }   
        else{
            msg.textContent="Try Again";
            this.style.backgroundColor="#232323";
        }
    });
}

function R_color()
{
    for(i =0; i<No_of_blocks; i++)
    {
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        rgb[i]="rgb("+r+", "+g+", "+b+")";
    }
}

function pickClr()
{
    Q_color= rgb[Math.floor(Math.random()*No_of_blocks)];
    Head_span.textContent=Q_color;
}
function reset()
{
    Head.style.backgroundColor="steelblue";
    R_color(No_of_blocks);
    pickClr();
    for(i=0; i<No_of_blocks; i++)
    {
        buttons[i].style.backgroundColor=rgb[i];
    }
    reset_button.textContent="New Colors";
}

// function mode_change()
// {
//     msg.textContent="";
//     if(No_of_blocks===6)    
//     {
//         No_of_blocks=3;
//         easy.textContent="Easy";
//         reset();
//         easy.classList.remove("btn-outline-danger");
//         easy.classList.add("btn-outline-success");
//         for(i=0; i<3; i++)
//             document.querySelectorAll("#hard")[i].classList.toggle("d-none");
//     }
//     else 
//     {  
//         No_of_blocks=6;
//         easy.textContent="Hard";
//         reset();
//         easy.classList.remove("btn-outline-success");
//         easy.classList.add("btn-outline-danger");
//         for(i=0; i<3; i++)
//             document.querySelectorAll("#hard")[i].classList.toggle("d-none");
//     }
// }

function mode(){
    for(i=No_of_blocks; i<6; i++)
        document.querySelectorAll(".colBlocks")[i].style="display: none";
    for(i=0; i<No_of_blocks; i++)
        document.querySelectorAll(".colBlocks")[i].style="display: block";
    easy.textContent="mode "+Math.floor(6/No_of_blocks);
    reset();
}