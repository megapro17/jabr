chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    chrome.tabs.sendMessage(tabId, {
        url: changeInfo.url,
    })
})