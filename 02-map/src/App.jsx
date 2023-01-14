import './App.css';

// mock de usuarios

const users = [
  {
    name: 'Carlos',
    address: 'Rua X',
    age: 28,
    isAdmin: false,
  },
  {
    name: 'Maria',
    address: 'Rua XX',
    age: 31,
    isAdmin: true,
  },
  {
    name: 'Matheus',
    address: 'Rua XI',
    age: 22,
    isAdmin: false,
  },
];

function App() {
  return (
    <>
      <ul>
        {users.map((user, idx) => {
          return (
            <li key={idx}>
              <h2>
                {user.name}, mora na {user.address} e tem {user.age} de idade!!
              </h2>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
