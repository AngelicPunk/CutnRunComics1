fetch('https://connect.squareup.com/v2/customers', {
  method: 'POST',
  headers: {
    'Authorization': "Bearer 'EAAAEII3lzW0Xq_96WKrO4CScCzByVQDsxXxc3VU4Z9HVeAYM1V0bX6grj2MHfHo'",
    'Content-Type': 'application/json'
  },
  body: JSON.parse()
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});
