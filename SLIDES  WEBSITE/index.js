alert("hi");


const search = () =>{

const searchbox= document.getElementById("searchi").value.toUpperCase();
const container=document.getElementById("products")
const boxes =document.querySelectorAll(".boxes")
const pname=document.getElementsByTagName("h2")

for(var i=0;i<pname.length;i++)
{
    let match=boxes[i].getElementsByTagName("h2")[0];
    
    if(match){
        let textvalue=match.textContent || match.innerHTML
        
        if(textvalue.toUpperCase().indexof(searchbox)>-1){
            boxes[i].style.display="block";
    
        }

        else{
            boxes[i].style.display="none";
        }
    }

}

}