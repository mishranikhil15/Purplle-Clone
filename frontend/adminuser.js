const store = document.querySelector(".store")

// userdetails///
const user_detais_btn = document.querySelector("#user");
user_detais_btn.addEventListener("click", () => {
    getAlluserData();
})

async function getAlluserData() {
    try {
        const res = await fetch("https://relieved-outerwear-fish.cyclic.app/users/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.ok) {
            const out = await res.json();
            console.log(out);
            render(out);
        }
    } catch (error) {
        console.log(error);
        console.log(error.message);
    }
}

//address/////
const user_address_btn1 = document.querySelector("#address");
user_address_btn1.addEventListener("click", () => {
    getAlluserData1();
})

async function getAlluserData1() {
    try {
        const res = await fetch("https://relieved-outerwear-fish.cyclic.app/address/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.ok) {
            const out = await res.json();
            console.log(out);
            render1(out);
        }
    } catch (error) {
        console.log(error);
        console.log(error.message);
    }
}

// /////////

function render(arr) {
    arr.forEach((el) => {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.innerText = "Name:" + el.name;
        let h4 = document.createElement("h4");
        h4.innerText = "Email:" + el.email;
        let p = document.createElement("p");
        p.innerText = "Gender:" + el.gender;
        let delete_btn = document.createElement("button");
        delete_btn.innerText = "Delete";
        delete_btn.addEventListener("click", () => {
            deletediv(el._id)
        })
        div.append(h3, h4, p, delete_btn);
        store.append(div);
    })
}

function render1(arr) {
    arr.forEach((el) => {
        let div = document.createElement("div");
        let name = document.createElement("h3");
        name.innerText = "Name:" + el.fullname;
        let mobile = document.createElement("h4");
        mobile.innerText = "Mobile:" + el.mobile;
        let pincode = document.createElement("p");
        pincode.innerText = "Pincode:" + el.pincode;
        let city = document.createElement("h4");
        city.innerText = "City:" + el.city;
        let state = document.createElement("h4");
        state.innerText = "State:" + el.state;
        let flatno = document.createElement("h4");
        flatno.innerText = "Flatno:" + el.flatno;
        let area = document.createElement("h4");
        area.innerText = "Area:" + el.mobile;
        let landmark = document.createElement("h4");
        landmark.innerText = "Landmark:" + el.landmark;
        let delete_btn = document.createElement("button");
        delete_btn.innerText = "Delete";
        delete_btn.addEventListener("click", () => {
            deletediv1(el._id)
        })
        div.append(name,mobile,pincode,city,state,flatno,area,landmark,delete_btn);
        store.append(div);
    })
}
/////user route

async function deletediv(ID) {
    try {
        let res = await fetch(`https://relieved-outerwear-fish.cyclic.app/users/${ID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",

            }

        });
        console.log(res);
        if (res.ok) {
            let out = await res.json();
            console.log(out)
            // window.location.href="adminuser.html"
        } else {
            alert("cannot delete")
        }
    } catch (error) {
        console.log(error)
    }
}

///address route////
async function deletediv1(ID) {
    try {
        let res = await fetch(`https://relieved-outerwear-fish.cyclic.app/address/${ID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",

            }

        });
        console.log(res);
        if (res.ok) {
            let out = await res.json();
            console.log(out)
            // window.location.href="adminuser.html"
        } else {
            alert("cannot delete")
        }
    } catch (error) {
        console.log(error)
    }
}


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
