const saveUsers = () => {
  localStorage.setItem("users", JSON.stringify(users));
};

let users = JSON.parse(localStorage.getItem("users")) || [
  { id: 1, name: "Denylson", age: 14 },
  { id: 2, name: "Keirrison", age: 15 }
];

const usersObj = users.reduce((acc, user) => {
  acc[user.name] = user;
  return acc;
}, {});

const showUsers = () => {
  let usuarios = document.querySelector('ul#usuarios');
  usuarios.innerHTML = "";
  users.forEach(user => {
    let li = document.createElement('li');
    li.innerText = `${user.id} - ${user.name} - ${user.age}`;
    usuarios.appendChild(li);
  });
};

showUsers();

const newUser = () => {
  let nameInput = document.querySelector('input#username').value;
  let ageInput = document.querySelector('input#userage').value;

  if (!nameInput || !ageInput) {
    alert("Preencha todos os campos!");
    return;
  }

  let newId = users.length + 1;

  let newUser = {
    id: newId,
    name: nameInput,
    age: Number(ageInput)
  };

  users.push(newUser);

  saveUsers();
  showUsers();

  document.querySelector('input#username').value = "";
  document.querySelector('input#userage').value = "";
};



const searchUser = () => {
  let idUserDeleted = document.querySelector('input#idUserDeleted').value;

  if (!idUserDeleted) {
    console.error("input vazio");
    alert("Insira um valor válido");
    return;
  }

  const deletedUser = users.find(user => user.id === Number(idUserDeleted));

  if (!deletedUser) {
    alert("Usuário não encontrado!");
    return;
  }

  const deletedUserJson = JSON.stringify(deletedUser);
  const deleteConfirm = confirm(`Você tem certeza que quer deletar ${deletedUserJson}?`);

  if (deleteConfirm === true) {
    const index = users.findIndex(user => user.id === Number(idUserDeleted));
    if (index !== -1) {
      users.splice(index, 1);
      alert("Usuário deletado com sucesso!");
      showUsers();
    }
    users.forEach((user, index) => {
      user.id = index + 1;
    });
    saveUsers();
    showUsers();
  }
};

