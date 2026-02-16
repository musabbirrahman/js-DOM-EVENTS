

document.getElementById('btn-change-title').addEventListener('click', function(){
    const titleChangeElement = document.getElementById('title-change');
    titleChangeElement.innerText = 'Changed title text'
})

document.getElementById('btn-login').addEventListener('click', function(){
    const userLogin = document.getElementById('user-info');
    userLogin.innerText = 'user logged in successfully';
})

document.getElementById('btn-update').addEventListener('click', function(){
    const inputName = document.getElementById('input-name');
    const userName = inputName.value;
    const changeName = document.getElementById('user-name');
    changeName.innerText = userName;
})