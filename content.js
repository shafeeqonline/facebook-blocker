(function () {
    function hideBlockedContent(blockingArray) {
        var lowerCaseBlockingArray = blockingArray.join('|').toLowerCase().split('|');
        var allUserContent = document.querySelectorAll('.fbUserContent');
        [].forEach.call(allUserContent, function (contentBlock) {
            var textBlock = contentBlock.querySelector('.userContent'),
                allTagsInside = textBlock.querySelectorAll('*');
            allTagsInside.forEach(function (textTag) {
                if (new RegExp(lowerCaseBlockingArray.join("|")).test(textTag.innerText.toLowerCase())) {
                    // At least one match
                    contentBlock.className += ' content-blocked';
                }
            })
        });
    }

    // Listen for messages
    chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
        // If the received message has the expected format...
        if (msg.text === 'hide_blocked_content') {
            var blockingArray = ["junior", "Pizza", "Saath"];
            // hideBlockedContent(blockingArray);

            sendResponse("Done removed all userContent");
        }
    });
    //Listen to storage change
    chrome.storage.onChanged.addListener(function (changes, namespace) {
        var blockingArray = changes.allWordsArray;
        hideBlockedContent(blockingArray.newValue);
    });

})();