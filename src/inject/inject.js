function injectJs(link) {
var scr = document.createElement('script');
scr.type="text/javascript";
scr.src=link;
document.getElementsByTagName('head')[0].appendChild(scr)
//document.body.appendChild(scr);
}
var timer = setInterval(function() {
	if ($('div[ng-show="state.loading"]').hasClass("ng-hide")) {
		//run some other function 
		clearInterval(timer);
		
		var fragment = create('<div id="sl-loadscreen"><div id="sl-loadingicon">ShareLatex Optimizr is loading<br><i class="fa fa-cogs" aria-hidden="true"></i></div></div>');
		document.body.insertBefore(fragment, document.body.childNodes[0]);

		injectJs(chrome.extension.getURL('src/inject/injected.js'));
	}
}, 200);


function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}
