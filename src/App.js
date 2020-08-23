import React from 'react';
import './App.css';
import MyForm from './Form/MyForm';
import NewForm from './Exercise/NewForm';
import MyBank from './Projekt_Banana_bank/MyBank';
import ContactList from './Projekt_contacts/ContactList';


function App() {
  return (
    <div className="App">
      {/* <MyForm />
      <NewForm /> */}
      <MyBank />
      <ContactList />
    </div>
  );
}

export default App;