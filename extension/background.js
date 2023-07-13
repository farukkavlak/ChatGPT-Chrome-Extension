const prompts = [
    "Translate / Improve",
    "English Correct",
    "Summarize",
    "Paraphrase",
    "Keywords",
    "Ask me Anything"
];

//To create context menu
chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        'title': 'Ask to ChatGPT',
        'contexts': ['selection'],
        'id': "chatgpt"
    });

    //According to the prompts create context menu
    for (let i = 0; i < prompts.length; i++) {
        chrome.contextMenus.create({
            'title': prompts[i],
            'contexts': ['selection'],
            'id': prompts[i],
            'parentId': "chatgpt",
        });
    }

});

//When click context menu, send message to background.js
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.parentMenuItemId == "chatgpt") {
        if (tab.id == "-1") {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.scripting.executeScript({ target: { tabId: tabs[0].id, allFrames: false }, files: ["content.js"] }).then(() => {
                    chrome.tabs.sendMessage(tabs[0].id, { input: info.selectionText, choice: info.menuItemId, type: "contextMenu" });
                });
            });
        } else {
            chrome.scripting.executeScript({ target: { tabId: tab.id, allFrames: false }, files: ["content.js"] }).then(() => {
                chrome.tabs.sendMessage(tab.id, { input: info.selectionText, choice: info.menuItemId, type: "contextMenu" });
            });
        }
    }
});
