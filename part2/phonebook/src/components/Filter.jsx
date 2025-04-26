const Filter = ({ searchTerm, onSearchChange }) => {
    return (
      <div>
        <input 
          type="text" 
          placeholder="Search by name" 
          value={searchTerm} 
          onChange={onSearchChange} 
        />
      </div>
    );
  };
  
  export default Filter;
  