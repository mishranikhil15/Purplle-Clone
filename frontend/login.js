const btn = document.getElementById("login")

btn.addEventListener("click", () => {
    
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#pass").value;
   if(email!=""&&password!=""){
    let obj = {
        
        email,
        password
        
    }
   
    login(obj);
   }else{
    alert("Please Fill In All The Fields")
   }
   
})

async function login(obj) {
    try {
        let res = await fetch("http://localhost:4200/users/login", {
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });
        // console.log(res); 
        if (res.ok) {
            alert("user has been logged in")
            let token = await res.json();
            console.log(token);
            localStorage.setItem("access_token",token.token)
            // window.location.href="notes.html"
        }else{
            alert("user not found")
        }
    } catch (error) {
        console.log(error)
    }
}


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
  