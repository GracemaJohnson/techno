const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-Key': 'sk_live_452dea8d-c16a-44e5-9e78-f8f517c36637'
    }
  };
  
  fetch('https://api.verbwire.com/v1/nft/data/transactions?walletAddress=0x7Af999bCFA3Aea994EDF7Ca4dD8CA62dC2B91F20&chain=ethereum', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));