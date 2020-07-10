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

exports = { readAddress };
