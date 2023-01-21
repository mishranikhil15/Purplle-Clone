const store = document.querySelector(".container");

const token=localStorage.getItem("access_token")

async function  getallcartdata() {
    try {
        let out = await fetch(`http://localhost:4200/cart/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        })
        if (out.ok) {
            let res = await out.json();
            console.log(res);
            render(res)
            alert("Data displayed")
        } else {
            alert("Not displayed")
        }
    } catch (error) {
        console.log(error)
    }
}
getallcartdata();


function render(res) {
    store.innerHTML=""
    res.forEach((ele) => {
        let div = document.createElement("div")
        let img=document.createElement("img");
        img.setAttribute("src",ele.image)
        let title = document.createElement("h2")
        title.innerText = ele.title;
        let rating = document.createElement("p")
        rating.innerText = "Rating " + ele.rating
        let price = document.createElement("h4")
        price.innerText = "₹ "+ele.price;
        let btn = document.createElement("button")
        btn.innerText = "DELETE";
        btn.addEventListener("click", () => {
           deletediv(ele._id)
            
        })
        let hr = document.createElement("hr")
        div.append(img,title,rating,price,btn)
        store.append(div)
    })
}


async function deletediv(ID){
    try {
        let out = await fetch(`http://localhost:4200/cart/${ID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        })
        if(out.ok){
            let res=await out.json();
            console.log("Deleted")
            alert("Data Deleted")
        }
    } catch (error) {
        console.log(error)
    }
}

