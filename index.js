//POST

const postData = async (URL, data) => {
    let response = await axios.post(URL, data) 
    console.log(response);
}

document.querySelector("#addUser").addEventListener("click",
    () => {
        let newUser = {
            name: "Kalle Anka",
            age:55
        };

        postData("http://localhost:5001/users", newUser)
    })
//DELETE

const deleteUser = async (url) => {
    await axios.delete(url)
}

//PUT

const updateUser = async (url,data) => {
    let response = await axios.put(url, data);
    console.log(response);
}

//render function
const getData = async (URL) => {
    let response = await axios.get(URL);
    console.log(response.data);
    return response.data
}

let renderPage = async () => {
    let users = await getData("http://localhost:5001/users");
    users.forEach(user => {
        let div = document.createElement("div");
        div.innerHTML = `<h2>Name: ${user.name} - Age: ${user.age} id: ${user.id}</h2>`
        //DELETE
        let deleteBtn = document.createElement("button");
        deleteBtn.addEventListener("click", () => {deleteUser("http://localhost:5001/users/" + user.id) })
        deleteBtn.textContent = "Delete user"
        div.append(deleteBtn);
        document.body.append(div);

        //UPDATE
        let updateBtn = document.createElement("button");
        
        let updatedUser = {
            name:"Kajsa Anka",
            age:70
        }

        updateBtn.addEventListener("click", () => {updateUser(`http://localhost:5001/users/${user.id}`, updatedUser) })
        updateBtn.textContent = "Update user"
        div.append(updateBtn);
        document.body.append(div);
    })
    
}

renderPage();

//Http request

//GET
