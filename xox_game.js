// Keeps track of whose turn it is
let memory ="x"; 

//Holds the character played by gamer1
let gamer1 = "x"; 

//To add events to boxes
let elements = document.querySelectorAll(".element"); 

// Gamer1's points
let count1 = document.querySelector(".count1"); 

//Gamer2's points
let count2 = document.querySelector(".count2"); 

//Shows which character the gamer1 is playing
let row1 = document.querySelector(".row1"); 

//Shows which character the gamer2 is playing
let row2 = document.querySelector(".row2"); 

//To show who won
let winner = document.querySelector(".winner");

//To add events to boxes
for(let a of elements)
{ 
    a.addEventListener("click" , run);
}

//To deactivate the boxes when the game is over
function deactivation()
{ 
    for(let a of elements)
    {
        a.removeEventListener("click" , run);
    }
}

//To indicate that it's gamer1's turn
function gamer1Active()
{ 
    document.querySelector(".gamer1").style.border = "3px solid red";
    document.querySelector(".gamer2").style.border = "none";
}

//To indicate that it's gamer2's turn
function gamer2Active()
{ 
    document.querySelector(".gamer2").style.border = "3px solid red";
    document.querySelector(".gamer1").style.border = "none";
}

//code that works when boxes are pressed
function run()
{
    
    //If the key is x and it is blank write x text content it
    if(memory=="x" && this.textContent=="")
    { 
        this.textContent = "x";
        memory="o";
        
        if(gamer1=="o")
            gamer1Active();
        
        else
            gamer2Active();
    }

    //If the key is o and it is blank write o text content it
    else if (memory=="o" && this.textContent=="")
    {
        this.textContent = "o";
        memory="x";
        
        if(gamer1=="o")
            gamer2Active();
        
        else
            gamer1Active();   
    }

    //win conditions
    if(elements[0].textContent==elements[1].textContent && elements[0].textContent==elements[2].textContent && elements[1].textContent==elements[2].textContent && elements[0].textContent!=""||
       elements[3].textContent==elements[4].textContent && elements[3].textContent==elements[5].textContent && elements[4].textContent==elements[5].textContent && elements[3].textContent!=""||
       elements[6].textContent==elements[7].textContent && elements[6].textContent==elements[8].textContent && elements[7].textContent==elements[8].textContent && elements[6].textContent!=""||
       elements[0].textContent==elements[3].textContent && elements[0].textContent==elements[6].textContent && elements[3].textContent==elements[6].textContent && elements[0].textContent!=""||
       elements[1].textContent==elements[4].textContent && elements[1].textContent==elements[7].textContent && elements[4].textContent==elements[7].textContent && elements[1].textContent!=""||
       elements[2].textContent==elements[5].textContent && elements[2].textContent==elements[8].textContent && elements[5].textContent==elements[8].textContent && elements[2].textContent!=""||
       elements[0].textContent==elements[4].textContent && elements[0].textContent==elements[8].textContent && elements[4].textContent==elements[8].textContent && elements[0].textContent!=""||
       elements[2].textContent==elements[4].textContent && elements[2].textContent==elements[6].textContent && elements[4].textContent==elements[6].textContent && elements[2].textContent!="")
    {
        if(memory=="x")
        {
            deactivation();   
            winner.textContent = "O won";
            
            if(gamer1=="x")
            {
                count2.textContent = String(parseInt(count2.textContent)+1);
                gamer1="o";
            }
            else
            {
                count1.textContent = String(parseInt(count1.textContent)+1);
                gamer1="x";
            }
            
        }
        else
        {
            deactivation();
            winner.textContent = "X won";
            
            if(gamer1=="x")
            {
                count1.textContent = String(parseInt(count1.textContent)+1);
                gamer1 = "o";
            }
            else
            {
                count2.textContent = String(parseInt(count2.textContent)+1);
                gamer1 = "x";
            }
        } 
    }

    //draw conditions
    else if(elements[0].textContent!="" &&
            elements[1].textContent!="" &&
            elements[2].textContent!="" &&
            elements[3].textContent!="" &&
            elements[4].textContent!="" &&
            elements[5].textContent!="" &&
            elements[6].textContent!="" &&
            elements[7].textContent!="" &&
            elements[8].textContent!="" )
    {
        winner.textContent = "Draw";
        
        if(gamer1=="x")
        {
            gamer1="o";
            row1.textContent = "O";
            row2.textContent = "X";
            deactivation();
        }
        else
        {
            gamer1="x";
            row1.textContent = "X";
            row2.textContent = "O";
            deactivation();
        }
        count1.textContent = String(parseInt(count1.textContent)+1);
        count2.textContent = String(parseInt(count2.textContent)+1);
    }
}

let reset = document.querySelector(".reset");
reset.addEventListener("click" , resett);

//Code to run when i press reset
function resett()
{
    
    //Code showing which character the player will play
    if(memory=="x")
    { 
        if(gamer1=="x")
        {
            row1.textContent = "X";
            row2.textContent = "O";
            gamer1Active();
        }
        else
        {
            row1.textContent = "O";
            row2.textContent = "X";
            gamer2Active();
        }
    }
    else
    {
        if(gamer1=="x")
        {
            row1.textContent = "X";
            row2.textContent = "O";
            gamer1Active();
        }
        else
        {
            row1.textContent = "O";
            row2.textContent = "X";
            gamer2Active();
        }
    }  

    //Memory, text content reset and button reactivation
    for(let a of elements)
    {
        memory = "x";
        a.textContent = "";
        winner.textContent = "";
        a.addEventListener("click" , run)
    }      
}
