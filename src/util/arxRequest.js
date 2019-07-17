export default function ArxRequest(setLoading, endpoint, payload, service, setResponse) {
  fetch(`${endpoint}/api/${service}`, {
    crossDomain: true,
    method: 'post',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => (response.json())).then((data) => {
    setResponse(data);
    setLoading(false);
  }).catch((error) => {
    const errorMessage = error;
    errorMessage.message = `No service connection, ${error}`;
    setResponse(errorMessage);
    setLoading(false);
  });
}
