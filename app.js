const URL = "https://api.github.com/users/";
const main = document.querySelector("#main");

// var search = document.getElementById("search");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   getuser(search.value);
// });

const formsubmit = () => {
  const searchBox = document.querySelector("#search");
  if (searchBox.value != "") {
    getuser(searchBox.value);
  }
  return false;
};
const getuser = async (username) => {
  const response = await fetch(URL + username);
  const data = await response.json();
  if (data.bio == null) {
    data.bio = "";
  }
  console.log(data);
  const card = `
      <div class="card">
          <div class="image">
               <img class="profile_pic" src="${data.avatar_url}" alt="">
          </div>
          <div class="user_info">
               <h2 class="name">${data.login}</h2>
               <p class="bio">${data.bio}</p>
               <p class="location"><i class="fa-solid fa-location-dot"></i> ${data.location}</p>
               <p class="joined"></p>
               <!-- Basic info -->
               <ul class="info">

                    <li class="following">${data.following} Following</li>
                    <li class="followers">${data.followers} Followers</li>
                    <li class="repos">${data.public_repos} Repositories</li>
               </ul>

               <!-- Repos -->
          </div>
     </div >
     <div id="repos">

     </div>
     `;
  main.innerHTML = card;
  document.getElementById("main").style.border = "2px solid red";
  getRepos(username);
};

const getRepos = async (username) => {
  const repos = document.querySelector("#repos");
  const response = await fetch(URL + username + "/repos");
  const data = await response.json();

  data.forEach((item) => {
    console.log(item);

    const element = document.createElement("a");
    const lineBreak = document.createElement("br");

    element.classList.add("repo");
    element.href = item.html_url;
    element.innerText = item.name + "";
    element.target = "_blank";
    repos.appendChild(element);
    element.appendChild(lineBreak);
  });
};

//
//
// 2nd User

const main1 = document.querySelector("#main1");

// var search = document.getElementById("search1");
// var form1 = document.getElementById("form2");
// form1.addEventListener("submit", function (e) {
//   e.preventDefault();
//   getuser(search.value);
// });

const formsubmit1 = () => {
  const searchbox1 = document.querySelector("#search1");
  if (searchbox1.value != "") {
    getuser1(searchbox1.value);
  }
  return false;
};

const getuser1 = async (username) => {
  const response = await fetch(URL + username);
  const data = await response.json();
  if (data.bio == null) {
    data.bio = "";
  }
  console.log(data);
  const card1 = `
          <div class="card">
               <div class="image">
                    <img class="profile_pic" src="${data.avatar_url}" alt="">     
               </div>
               <div class="user_info">
                    <h2 class="name">${data.login}</h2>
                    <p class="bio">${data.bio}</p>
                    <p class="location"><i class]"fa-solid fa-location-dot"></i>${data.location}</p>
                    <p class="joined"></p>
                    <ul class="info">
                         <li class="following">${data.following} Following</li>
                         <li class="following">${data.followers} Followers</li>
                         <li class="following">${data.public_repos} Repositories</li>
                    </ul>

               </div>
          </div>
          <div id="repos1"></div>
     `;
  main1.innerHTML = card1;
  document.getElementById("main1").style.border = "2px solid red";
  getRepos1(username);
};
const getRepos1 = async (username) => {
  const repos = document.querySelector("#repos1");
  const response = await fetch(URL + username + "/repos");
  const data = await response.json();

  data.forEach((item) => {
    console.log(item);

    const element = document.createElement("a");
    const lineBreak = document.createElement("br");

    element.classList.add("repo");
    element.href = item.html_url;
    element.innerText = item.name + "";
    element.target = "_blank";
    repos.appendChild(element);
    element.appendChild(lineBreak);
  });
};
