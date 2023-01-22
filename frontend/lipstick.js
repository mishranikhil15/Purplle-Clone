const store = document.querySelector(".container")
const filt=document.querySelector("#country")

const rating=document.querySelector("#rating")
const price=document.querySelector("#price")

const token=localStorage.getItem("access_token")

const search= document.querySelector("#searc");
const search_btn=document.querySelector("#search_btn");
search_btn.addEventListener("click",()=>{
    let value=search.value;
    console.log(value);
    getSearchdata(value)
})




////filter
filt.addEventListener("change",()=>{
    let value=filt.value;
    console.log(value);
    if(value=="country"){
        dispalydata();
    }else{
        getfilterdata(value)
    }
})


/////sort
price.addEventListener("change",()=>{
    let value=price.value;
    if(value=="Price"){
        dispalydata();
    }else if(value=="LTH"){
        getsortdata(1)
    }else if(value=="HTL"){
        getsortdata(-1)
    }
})


///sort rating
rating.addEventListener("change",()=>{
    let value=rating.value;
    if(value=="rating"){
        dispalydata();
    }else if(value=="LTH"){
        getsort1data(1)
    }else if(value=="HTL"){
        getsort1data(-1)
    }
})

///////searchdata
async function  getSearchdata(value) {
    try {
        let out = await fetch(`http://localhost:4200/lipstick/?title1=${value}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                
            }
        })
        if (out.ok) {
            let res = await out.json();
            console.log(res);
            render(res)
            // alert("Data displayed")
        } else {
            alert("Not displayed")
        }
    } catch (error) {
        console.log(error)
    }
}





////rating sorting
async function getsort1data(value) {
    try {
        let out = await fetch(`http://localhost:4200/lipstick/?rating=${value}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                
            }
        })
        if (out.ok) {
            let res = await out.json();
            console.log(res);
            render(res)
            // alert("Data displayed")
        } else {
            alert("Not displayed")
        }
    } catch (error) {
        console.log(error)
    }
}

////price sort
async function getsortdata(value) {
    try {
        let out = await fetch(`http://localhost:4200/lipstick/?price=${value}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                
            }
        })
        if (out.ok) {
            let res = await out.json();
            console.log(res);
            render(res)
            // alert("Data displayed")
        } else {
            alert("Not displayed")
        }
    } catch (error) {
        console.log(error)
    }
}


/////filterdata
async function getfilterdata(value) {
    try {
        let out = await fetch(`http://localhost:4200/lipstick/?country=${value}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                
            }
        })
        if (out.ok) {
            let res = await out.json();
            console.log(res);
            render(res)
            // alert("Data displayed")
        } else {
            alert("Not displayed")
        }
    } catch (error) {
        console.log(error)
    }
}


async function dispalydata() {
    try {
        let out = await fetch("http://localhost:4200/lipstick/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                
            }
        })
        if (out.ok) {
            let res = await out.json();
            console.log(res);
            render(res)
            // alert("Data displayed")
        } else {
            alert("Not displayed")
        }
    } catch (error) {
        console.log(error)
    }
}

dispalydata();


// image
// "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-@@mediafiles@m…"
// title
// "Faces Canada Weightless Creme Lipstick"
// rating
// 4
// price
// 500

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
        btn.innerText = "ADD TO CART";
        btn.addEventListener("click", () => {
            let obj={
             image:ele.image,
                title:ele.title,
                rating:ele.rating,
                country:ele.country,
                price:ele.price,

            }
            addcart(obj)
        })
        let hr = document.createElement("hr")
        div.append(img,title,rating,price,btn)
        store.append(div)
    })
}

async function addcart(obj) {
    if(token==undefined){
     console.log("Please Login First")
     alert("Please Login First")
    }else{
        try {
            let res = await fetch("http://localhost:4200/cart/create", {
                body:JSON.stringify(obj),
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token
                }
               
            });
            // console.log(res); 
            if (res.ok) {
                let out = await res.json();
                console.log(out)
                alert("Data added to cart")
                // window.location.href="notes.html"
            } else {
                alert("cannot add")
            }
        } catch (error) {
            console.log(error)
        }
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