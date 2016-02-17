window.onload = function (){
	var isIE = function(ver){
	    var b = document.createElement('b')
	    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
	    return b.getElementsByTagName('i').length === 1
	}
	if(isIE(8) || isIE(7) || isIE(6) || isIE(5) || isIE(4) || isIE(3) || isIE(2) || isIE(1)){
	    alert('本页面仅兼容IE9+浏览器');  
	}
}