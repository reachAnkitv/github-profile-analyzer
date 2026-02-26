let profile=document.querySelector("#prof");
let reposit=document.querySelector("#repo");

let entered=document.querySelector("#uname");
let btn=document.querySelector("#btn");


async function bring(un){
    
    let rep= await fetch(un);
    let val=await rep.json();
    return val;
}

let doit=()=>{
    
if(entered.value.length!=0){
 let rep="https://api.github.com/users/"+entered.value+"/repos";
 let pro="https://api.github.com/users/"+entered.value;
 let ar=[bring(pro),bring(rep)];
    
    profile.innerText="LOADING...";
    reposit.innerText="LOADING...";
    ar[0].then((x)=>{
        profile.innerHTML=`<br> DETAILS OF PROFILE <br><br> <img  src=${x.avatar_url} width="100"> <br>
        NAME-${x.name} <br> Public repos-${x.public_repos}  <br>  Location-${x.location} <br>  <br> `;
        
    });
    ar[0].catch((r)=>{
        profile.innerText="SOME ISSUE";
    });
    ar[1].then((m)=>{
        let out=`DETAILS OF REPOSITORY <br> <br>`;
        for(let z=0;z<m.length;z++){
            out=out+`REPO--${z+1} REPO NAME-${m[z].name}   REPO DECRIPTION-${m[z].description}   LANGUAGE USED-${m[z].language}  <br> `;
        }
        out=out+`<br>`;
        reposit.innerHTML=out;
    });
    ar[1].catch((v)=>{
        reposit.innerText="SOME ISSUE";
    });

    }else{
    alert("value is empty");
}
}
btn.addEventListener("click",doit);