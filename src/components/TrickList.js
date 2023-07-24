import React, { useEffect, useState } from 'react';
import TrickItem from './TrickItem';
import { fetchTricks } from './api';
import './TrickList.css';

function TrickList() {
  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    fetchTricks()
      .then((data) => setTricks(data))
      .catch((error) => console.error('Error fetching tricks:', error));
  }, []);

  return (
    <div>
      <h2>Trick List</h2>
      <ul>
        {tricks.map((trick) => (
          <TrickItem key={trick.id} trick={trick} />
        ))}
      </ul>
    </div>
  );
}

export default TrickList;
