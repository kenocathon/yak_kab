const createTransport = async (userId, credentials, transport) => {
  try {
    let response = await fetch(`/${userId}/transports`, {
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
