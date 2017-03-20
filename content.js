(function () {
    // find the ueb markup
    var element = document.querySelector(
        'link[rel="edit"], ' +
        'link[rel="alternate"][type="application/x-wiki"], ' +
        'link[rel="alternate"][type="application/wiki"]'
    );

    // send a message to the background script
    if (element && element.href) {
        var title = 'Edit this page';
        if (element.title) title = element.title;
        chrome.extension.sendMessage({title: title, href: element.href});
    }
})();