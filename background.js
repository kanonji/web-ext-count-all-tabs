let title
browser.browserAction.getTitle({}).then((v) => {title = v})
browser.browserAction.setBadgeBackgroundColor({
    color: "#333",
})
browser.browserAction.setBadgeTextColor({
    color: "#FFF",
})
countAllTabs();
browser.tabs.onCreated.addListener(countAllTabs);
browser.tabs.onRemoved.addListener(countAllTabs);

function countAllTabs() {
    setTimeout(() => {
        browser.tabs.query({}).then((tabs) => {
            const tabCount = String(tabs.length)
            browser.browserAction.setBadgeText({
                text: tabCount,
            })
            browser.browserAction.setTitle({
                title: title + " (" + tabCount + " tabs)",
            })
        })
    }, 300)
}
