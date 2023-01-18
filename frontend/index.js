let cont=document.querySelector(".cont");

async function getAlldata(type){
    try {
      const res=await fetch(`http://localhost:4200/homepage/?type=${type}`,{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
      })
      if(res.ok){
        const out=await res.json();
        console.log(out);
        render(out);
      }
    } catch (error) {
        console.log(error);
        console.log(error.message);
    }
}
getAlldata("large")
getAlldata("medium")




// image:{type:String,required:false},
// name:{type:String,required:false},
// rating:{type:Number,required:false},
// price:{type:Number,required:false},
// type:{type:String,require:false}

function render(arr){
    arr.forEach((el)=>{
        let div=document.createElement("div");
        
        let img=document.createElement("img");
        img.setAttribute("src",el.image);
        // img.setAttribute("width","100%")
        img.innerHTML=el.image
       
        div.append(img);
        cont.append(div);
    })
}