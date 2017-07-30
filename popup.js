// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


chrome.storage.sync.get("allWordsArray", function(items){
  document.getElementById('blocked-words').value = items.allWordsArray.join(', ');
})

var blockButton = document.getElementById('block-button');
blockButton.addEventListener("click", function() {
  var allWords = document.getElementById('blocked-words').value,
    allWordsArray = allWords.trim().split(",");
    chrome.storage.sync.set({'allWordsArray': allWordsArray}, function() {
    // Notify that we saved.
});
}, false);