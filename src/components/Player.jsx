import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    if (isEditing && playerName.trim() === '') {
      return;
    }

    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName.toUpperCase());
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleBlur() {
    if (isEditing && playerName.trim() !== '') {
      setIsEditing(false);
      onChangeName(symbol, playerName.toUpperCase());
    }
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      <input 
        type="text" 
        required 
        value={playerName} 
        onChange={handleChange}
        onBlur={handleBlur}
      />
    );
    // btnCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
