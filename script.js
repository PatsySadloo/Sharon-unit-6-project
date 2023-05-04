let imageUrs=[];
let imageContainer=document.querySelector("#Place1");
// Declare your genre arrays here
let romance=["https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_.jpg","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRYoaJ5YKRIR8ZZVhj-z3pEhQpJ3VHsqOG9RTBzP5KpmpEolvjf","https://m.media-amazon.com/images/M/MV5BNjQwM2Y3ODQtYjExMi00OGIwLWFhZWYtNDY0ZDM4ZTk1MzU1XkEyXkFqcGdeQXVyNjE5NTc2OTQ@._V1_.jpg"];
let horror=["https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6Ao-5WuUc8dbzISTQGHy4pH3HZ6iUBboqeoPWLPp-cmel4-Jh","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNSKfR2TExfaV_5frv7QdrwJEpB-Kxyy05Rj8EDQxEz_Upe5VQ","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSOw35Rhk1HVB0Qs8m8G9WtCae5o_6wEk_ElJxc2pYH1MA_Zcgg"];

let action=["https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ2IBsC-V_4yWbxP6E-mZnylYRTYq2G1lp8_s2XMzHPxkWqmKHp","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTxb7A9X-FoM6kcMiKTeoAa92cMutRrAvTqiQYUUGAFktPZbrLM","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTv0xykcftQCSo8e6O-0jnKKWv-MbcMqv31CXlf5b3leZ-H0Foy"];
// Make sure to declare your HTML elements as variables! 
let button1=document.querySelector(".submit");
let button2=document.querySelector(".suggest");

button1.onclick=function(){
let input1 = document.querySelector(".input1").value;
    let Mostrar= document.querySelector(".Mostrar");
    Mostrar.innerHTML = ""; 
    if (input1 ==="romance" || input1 ==="romance") {
        for (let url of romance) {
            let img = "<img src=" + url + ">";
            Mostrar.insertAdjacentHTML("beforeend", img);}}
            else if(input1==="horror"|| input1==="Horror"){for (let url of horror){ let img ="<img src="+url+">";
                                                                                Mostrar.insertAdjacentHTML("beforeend", img);}}
                                                                                   else if(input1==="action" || input1==="Action"){for (let url of action){ let img="<img src="+url+">";
Mostrar.insertAdjacentHTML("beforeend",img);                                                                 
                
        }
    } 
};
button2.onclick=function(){{let input2=document.querySelector(".input2").value;
                                 
  imageUrs.push(input2);
                                 let img = "<img src=" +input2+ ">";
  imageContainer.insertAdjacentHTML("beforeend", img);

                                                                
}
    
};


    
    
   