const targetDomains = ["googleadservices.com", "google.com"];
const emParameterPrefix = "tv.1~em";

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    const params = new URLSearchParams(url.search);
    const emValue = params.get("em");

    if (emValue && emValue.startsWith(emParameterPrefix)) {
      // Send message to DevTools for highlighting
      chrome.runtime.sendMessage({ type: "highlightRequest", requestId: details.requestId });
      
      // Save the detected request and 'em' value in Chrome storage
      chrome.storage.local.get({ detectedRequests: [] }, function(result) {
        const newRequest = {
          url: details.url,
          requestId: details.requestId,
          timestamp: new Date().toLocaleString(),
          emValue: emValue  // Store the 'em' parameter value
        };
        const updatedRequests = [...result.detectedRequests, newRequest];
        chrome.storage.local.set({ detectedRequests: updatedRequests });
      });
    }
  },
  { urls: ["*://*.googleadservices.com/*", "*://*.google.com/*"] },
  []
);
