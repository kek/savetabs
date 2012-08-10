function savetabs () {
    var content = document.getElementById('content');
    chrome.tabs.getAllInWindow(
        null,
        function(tabs) {
            for (var i in tabs) {
                tab = tabs[i];
                content.innerHTML += '[' + tab.url + ' ' + tab.title + '] \n\n';
            }
            content.select();
            document.execCommand('Copy');
        }
    );
}

document.addEventListener('DOMContentLoaded', function () {
  savetabs();
});
