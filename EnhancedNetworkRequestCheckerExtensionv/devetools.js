chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "highlightRequest") {
    highlightMatchingRequest(message.requestId);
  }
});

function highlightMatchingRequest(requestId) {
  const elements = document.querySelectorAll(`.network-item[request-id="${requestId}"]`);
  elements.forEach(element => {
    element.style.backgroundColor = "#FF5733";
  });
}
