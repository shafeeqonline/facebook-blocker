// A function to use as callback
function doStuffWithDom() {
     chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
      var specTab = tabs[0];
      chrome.tabs.insertCSS(specTab.id, {file: "style.css"});
    })
}

// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {
    // ...check the URL of the active tab against our pattern and...
    chrome.tabs.sendMessage(tab.id, {text: 'hide_blocked_content'}, doStuffWithDom);
});

chrome.runtime.onStartup.addListener(function () {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
    console.log("I ran on load");
    var specTab = tabs[0];
    chrome.tabs.insertCSS(specTab.id, {file: "style.css"});
  })
})