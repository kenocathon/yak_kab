const createTransport = async (userId, credentials, transport) => {
  try {
    let response = await fetch(`/api/users/${userId}/transports`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t,
      },
      body: JSON.stringify(transport),
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

const readTransport = async (userId, credentials) => {
  try {
    let response = await fetch(`/api/users/${userId}/transports`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${credentials.t}`,
      },
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

const removeTransport = async (userId, credentials, transportId) => {
  try {
    let response = await fetch(`api/users/${userId}/transports/${transportId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': `Bearer ${credentials.t}`
      },
    })
    return await response.json();
  } catch (err) {
    console.error(err)
  }
}

export { createTransport, readTransport, removeTransport };
