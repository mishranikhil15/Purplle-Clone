let input_form_btn=document.querySelector("#all_entry form");
input_form_btn.addEventListener("submit",async (e)=>{
    try {
        e.preventDefault();
        let obj={};
        let all_input_tag=document.querySelectorAll("#all_entry input");
        for(let i=0;i<all_input_tag.length-1;i++){
            obj[all_input_tag[i].id]=all_input_tag[i].value;
        }
        console.log(obj);
        let res=await fetch("http://localhost:4200/address/create",{
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(obj)
        })
        if(res.ok){
            let out=await res.json();
            console.log(out);
            alert("Address added sucessfully!!")
            
        }
    } catch (error) {
        console.log(error);
    }
   
})


document.querySelector('#job').addEventListener('mouseover', () => {
    document.querySelector('.hover1').style.display = 'grid';
  })
  document.querySelector('#job').addEventListener('mouseleave', () => {
    document.querySelector('.hover1').style.display = 'none';
  })
  
  document.querySelector('#recruit').addEventListener('mouseover', () => {
    document.querySelector('.hover2').style.display = 'grid';
  })
  document.querySelector('#recruit').addEventListener('mouseleave', () => {
    document.querySelector('.hover2').style.display = 'none';
  })
  