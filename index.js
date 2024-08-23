// var n1=Math.random()*6;
// var a1=Math.ceil(n1);
// var n2=Math.random()*6;
// var a2=Math.ceil(n2);
// function changeImage() {
//     // Select the image element
//     var img = document.querySelector("#td img");
//     var img1=document.querySelector("#td1 img");
//     switch(a1)
//     {
//         case 1:
//             img.src='dice-1.svg'; 
//             break;
//         case 2:
//             img.src='dice-2.svg'; 
//             break; 
//         case 3:
//             img.src='dice-3.svg'; 
//             break; 
//         case 4:
//             img.src='dice-4.svg'; 
//             break;   
//         case 5:
//             img.src='dice-5.svg'; 
//             break; 
//         case 6:
//             img.src='dice-6.svg'; 
//             break; 
    
//     }
//     switch(a2)
//     {
//         case 1:
//             img1.src='dice-1.svg'; 
//             break;
//         case 2:
//             img1.src='dice-2.svg'; 
//             break; 
//         case 3:
//             img1.src='dice-3.svg'; 
//             break; 
//         case 4:
//             img1.src='dice-4.svg'; 
//             break;   
//         case 5:
//             img1.src='dice-5.svg'; 
//             break; 
//         case 6:
//             img1.src='dice-6.svg'; 
//             break; 
//     }
//     if(a1>a2)
//     {
//         document.querySelector(".ass").innerHTML="Player1 won";
//         //alert("player1 won");
//     }
//     else if(a1===a2)
//     {
//         document.querySelector(".ass").innerHTML="Tie";
//         //alert("tie");
//     }
//     else
//     {
//         document.querySelector(".ass").innerHTML="Player2 won";
//         //alert("player2 won");
//     }
// }

// // Call the function when the page loads
// window.onload = changeImage;
// var n1=Math.random()*6;
// var a1=Math.ceil(n1);
// var n2=Math.random()*6;
// var a2=Math.ceil(n2);
// var imgsrc1="dice-"+a1+".svg";
// var imgsrc2="dice-"+a2+".svg";
// var name1=document.querySelectorAll("img")[0];
// name1.setAttribute("src",imgsrc1);
// var name2=document.querySelectorAll("img")[1];
// name2.setAttribute("src",imgsrc2);
// if(a1>a2)
//         {
//             document.querySelector(".ass").innerHTML="Player1 won";
//             //alert("player1 won");
//         }
//         else if(a1===a2)
//         {
//             document.querySelector(".ass").innerHTML="Tie";
//             //alert("tie");
//         }
//         else
//         {
//             document.querySelector(".ass").innerHTML="Player2 won";
//             //alert("player2 won");
//         }
var n1=Math.random()*6;
var a1=Math.ceil(n1);
var n2=Math.random()*6;
var a2=Math.ceil(n2);
var imgsrc1="dice-"+a1+".svg";
var imgsrc2="dice-"+a2+".svg";
var name1=document.querySelectorAll("img")[0];
name1.setAttribute("src",imgsrc1);
var name2=document.querySelectorAll("img")[1];
name2.setAttribute("src",imgsrc2);
if(a1>a2)
        {
            document.querySelector(".ass").innerHTML="Player1 won";
            //alert("player1 won");
        }
        else if(a1===a2)
        {
            document.querySelector(".ass").innerHTML="Tie";
            //alert("tie");
        }
        else
        {
            document.querySelector(".ass").innerHTML="Player2 won";
            //alert("player2 won");
        }
document.querySelector("button").addEventListener("click",function(){
    location.reload();
   // alert("refreshing to decide winner");
    //setTimeout(10000);
})