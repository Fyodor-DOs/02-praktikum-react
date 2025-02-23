import './App.css';
import Counter from './Counter';
import Greeting from './Greeting';
import React, { useState } from 'react';
import TodoList from './TodoList';

function Example() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div>
            <input type="text" placeholder="Nama" value={name} onChange={handleNameChange} />
            <input type="number" placeholder="Umur" value={age} onChange={handleAgeChange} />
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <p>{name} berumur {age} tahun dan emailnya adalah {email}.</p>
        </div>
    );
}

//Komponen header
function Header() {
  return (
    <header>
      <h1>Aplikasi React Fathir</h1>
    </header>
  )
}

//Komponen main
function Main() {
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Fathir!</h2>
      <p>Ini adalah area konten utama.</p>
    </main>
  )
}

//Komponen footer
function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Aplikasi React Fathir</p>
    </footer>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Greeting name="Fathir"/>
      <Counter/>
      <Example/>
      <TodoList />
      <Footer/>
    </div>
  );
}

export default App;
