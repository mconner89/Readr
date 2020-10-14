import Axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ChooseName = ({ user }) => {
  const [chosenName, setChosenName] = useState('');
  const history = useHistory();


  const handleSubmit = () => {
    Axios.post('/readr/saveName', { user, chosenName })
      .then(({ data }) => {
        console.log(data);
        history.push('/preferences', { user: data });
      })
      .catch((error) => {
        window.alert('Username taken!');
        console.error(error);
      });
  }
  return (
    <div>
      <input
        type="text"
        placeholder="choose your username"
        value={chosenName}
        onChange={(e) => setChosenName(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => handleSubmit()}
      >
        submit
      </button>
      <br />
    </div>
  );
};

export default ChooseName;