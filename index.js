let use_list_tag = document.querySelector(".user-list");
let single_user_tag = document.createElement("div");
let name_input_tag = document.querySelector(".name-input");
let email_input_tag = document.querySelector(".email-input");
let form_tag = document.querySelector(".form");

let url = "http://localhost:8080/users";

const fetchUser = function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      displayUser(data);
    });
};

fetchUser();

let displayUser = function (users) {
  use_list_tag.innerHTML=''
  users.map((user, i) => {
    let div = document.createElement("div");
    div.innerHTML = `
      

       <section>
      
       <h1 class='name-x'>${user.name} </h1>
      

      <div class='email-x'>
       <h4>Email:</h4>
        <p>${user.email}</p>
       </div>
    
     
       </section>
       `;
    use_list_tag.appendChild(div);
    div.classList.add("single-user");
  });
};

async function addUsers(e) {
  e.preventDefault();

  const name = name_input_tag.value;
  const email = email_input_tag.value;
  const newUser = { name, email };

  try {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    if (response.ok) {
      const addedUsers = await response.json();
      fetchUser()
      console.log(addedUsers);
      name_input_tag.value = "";
      email_input_tag.value = "";
    } else {
      console.error("Error adding userwer: " + response.statusText);
    }
  } catch (error) {
    console.error("Error adding userl:", error);
  }
}

form_tag.addEventListener("submit", async (e) => addUsers(e));
