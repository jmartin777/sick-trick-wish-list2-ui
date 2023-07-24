
export async function fetchTricks() {
  const response = await fetch('http://localhost:3001/api/v1/tricks');
  if (!response.ok) {
    throw new Error('Failed to fetch tricks from the API');
  }
  return response.json();
}

export async function postTrick(newTrick) {
  const response = await fetch('http://localhost:3001/api/v1/tricks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTrick),
  });
  if (!response.ok) {
    throw new Error('Failed to add new trick');
  }
  return response.json(); 
}
