// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'hide_blocked_content') {
        var blockingArray = ["junior", "Pizza", "Saath"];
        var lowerCaseBlockingArray = blockingArray.join('|').toLowerCase().split('|');
        var allUserContent = document.querySelectorAll('.fbUserContent');
        [].forEach.call(allUserContent, function (contentBlock) {
            var textBlock = contentBlock.querySelector('.userContent'),
                allTagsInside = textBlock.querySelectorAll('*');
            allTagsInside.forEach(function(textTag){
                debugger;
                if (new RegExp(lowerCaseBlockingArray.join("|")).test(textTag.innerText.toLowerCase())) {
                    // At least one match
                    contentBlock.className += ' content-blocked';
                }
            })
        });

        sendResponse("Done removed all userContent");
    }
});