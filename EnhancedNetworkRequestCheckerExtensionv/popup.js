document.addEventListener('DOMContentLoaded', function () {
  const requestsList = document.getElementById('requestsList');
  
  chrome.storage.local.get({ detectedRequests: [] }, function (result) {
    const detectedRequests = result.detectedRequests;
    detectedRequests.forEach(request => {
      const listItem = document.createElement('li');
      
      // Display the URL
      listItem.textContent = request.url;
      
      // Display the timestamp
      const timestamp = document.createElement('div');
      timestamp.className = 'timestamp';
      timestamp.textContent = `Detected at: ${request.timestamp}`;
      listItem.appendChild(timestamp);
      
      // Display the 'em' parameter value
      const emValue = document.createElement('div');
      emValue.className = 'em-value';
      emValue.textContent = `em value: ${request.emValue}`;
      listItem.appendChild(emValue);
      
      requestsList.appendChild(listItem);
    });
  });
});
