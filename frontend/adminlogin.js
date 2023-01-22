document.querySelector('#job').addEventListener('mouseover', () => {
    document.querySelector('.hover1').style.display = 'grid';
  })
  document.querySelector('#job').addEventListener('mouseleave', () => {
    setTimeout(()=>{
      document.querySelector('.hover1').style.display = 'none';
    },3000)
  })
  
  document.querySelector('#recruit').addEventListener('mouseover', () => {
    document.querySelector('.hover2').style.display = 'grid';
  })
  document.querySelector('#recruit').addEventListener('mouseleave', () => {
    document.querySelector('.hover2').style.display = 'none';
  })


  let store=document.querySelector("#login");

  store.addEventListener("click",()=>{
    let email=document.querySelector("#email").value ;
    let password=document.querySelector("#pass").value ;
    let obj={
        email,
        password
    }
    if(email=="nikhil@gmail.com"&&password=="nikhil"){
        window.location.href="adminuser.html"
    }else{
        alert("Admin Not Found")
    }
  })