const PersonForm = ({ newName, newNumber, onNameChange, onNumberChange, onAddPerson }) => {
    return (
      <form onSubmit={onAddPerson}>
        <div>
          name: 
          <input 
            value={newName} 
            onChange={onNameChange} 
            placeholder="Ingrese nombre"
          />
        </div>
        <div>
          number: 
          <input 
            value={newNumber} 
            onChange={onNumberChange} 
            placeholder="Ingrese número"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
  };
  
  export default PersonForm;
  