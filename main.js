(function () {
    console.log('main.js start');

    let wUrl = window.location.toString();
	//if (!wUrl.contains('google.com')) {
	if (!wUrl.includes('google.com')) {
		return;
	}		
	
	localStorage.setItem("test", "I was here");

    let style = document.createElement('style');
    style.innerHTML = ' .red { color:red; } ';
    document.getElementsByTagName('head')[0].appendChild(style);
	
	let h1 = document.createElement('h1');
	h1.innerHTML = 'I Know What You Did Last Summer';
	h1.className = 'red';
	let search = document.querySelector('textarea');
	search.insertAdjacentElement('afterend', h1);
})();
