const btn = document.getElementById("signup")

btn.addEventListener("click", () => {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#pass").value;
    let age = document.querySelector("#age").value;
    let obj = {
        name,
        email,
        password,
        age
    }
    register(obj);
})

async function register(obj) {
    try {
        let res = await fetch("http://localhost:4200/users/register", {
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });
        // console.log(res);
        if (res.ok) {
            alert("user has been created")
            let out = await res.json();
            console.log(out);
            window.location.href="login.html"
        }
    } catch (error) {
        console.log(error)
    }
}