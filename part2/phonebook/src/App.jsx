import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Función para manejar el cambio de texto en el input del nombre
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  // Función para manejar el cambio de texto en el input del número
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  // Función para manejar el cambio de texto en el input de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Función para agregar un nuevo nombre y número a la lista
  const handleAddPerson = (event) => {
    event.preventDefault();

    const nameExists = persons.some(person => person.name === newName);
    
    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    } else if (newName && newNumber) {
      setPersons([...persons, { name: newName, number: newNumber, id: persons.length + 1 }]);
      setNewName('');
      setNewNumber('');
    } else {
      alert('Both name and number must be filled out.');
    }
  };

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      
      <h3>Add a new</h3>
      
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        onNameChange={handleNameChange} 
        onNumberChange={handleNumberChange} 
        onAddPerson={handleAddPerson} 
      />
      
      <h3>Numbers</h3>
      
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;