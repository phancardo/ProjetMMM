import { useState } from "react";

export default function Region_crud() {
  // Créez un état local pour suivre la valeur de l'input
  const [valeurInput, setValeurInput] = useState('');

  // Fonction pour gérer le changement de la valeur de l'input
  const handleChange = (e) => {
    setValeurInput(e.target.value);
  };

  // Fonction pour changer la valeur de l'input après avoir cliqué sur la balise <a>
  const handleClick = () => {
    setValeurInput('Nouvelle valeur après avoir cliqué');
  };

  return (
    <div>
      <input
        type="text"
        value={valeurInput}
        onChange={handleChange}
      />
      <a href="#" onClick={handleClick}>Cliquez ici</a>
    </div>
  );
}