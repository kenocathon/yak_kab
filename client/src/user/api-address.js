const createAddress = async (id, credentials, address) => {
  try {
    let response = await fetch(`/api/users/${id}/address`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t,
      },
      body: JSON.stringify(address),
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

const readAddress = async (id, credentials, signal) => {
  try {
    let response = await fetch(`/api/users/${id}/address`, {
      method: 'GET',
      signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

const updateAddress = async (id, credentials, address) => {
  try {
    let response = await fetch(`/api/users/${id}/address`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t,
      },
      body: JSON.stringify(address),
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export { readAddress, updateAddress, createAddress };
