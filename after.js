(function () {
    console.log('after.js executed');

    function injectScript(file, node) {
        let th = document.getElementsByTagName(node)[0];
        let s = document.createElement('script');
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('src', file);
        th.appendChild(s);
    }

    injectScript(chrome.runtime.getURL('/main.js'), 'body');
})();
