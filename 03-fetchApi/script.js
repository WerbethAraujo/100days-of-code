const container = document.querySelector('.container');
const cardUser = document.querySelector('.card');
const userImg = document.querySelector('.img');
const userName = document.querySelector('.name');
const userEmail = document.querySelector('.email');
const userId = document.querySelector('.id');

getData();

async function getData() {
  try {
    const data = await fetch('https://reqres.in/api/users/1');
    const user = await data.json();

    console.log(user);
    const avatar = document.createElement('img');
    avatar.src = user.data['avatar'];

    avatar.classList.add('avatar');
    userImg.appendChild(avatar);

    const fullName = `${user.data['first_name']} ${user.data['last_name']}`;

    userId.innerHTML = `ID: ${user.data['id']}`;
    userName.innerHTML = `NOME: ${fullName}`;
    userEmail.innerHTML = `EMAIL: ${user.data['email']}`;
  } catch (error) {
    console.log('Errro ao buscar dados', error);
  }
}

// https://reqres.in/api/users/
