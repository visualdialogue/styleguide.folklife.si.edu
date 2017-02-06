var i = 0;
var AlertBoxHeight = 200;
var AlertBoxWidth = 200;
var AlertBoxX = 300;
var AlertBoxY = 20;
var AlertReady = false;
var AlertDivID = "AlertBox";
var Zmax = 100;

var AlertBoxCSS_shadowBlur = "24px";
var AlertBoxCSS_shadowX = "4px";
var AlertBoxCSS_shadowY = "8px";
var AlertBoxCSS_shadowColor = "#999";

function Alert(text, append){
	if(AlertReady == false){
		var myCSS = 'margin:10px;';
		myCSS += 'display:block;';
		myCSS += 'padding:15px;';
		myCSS += 'overflow:hidden;';
		myCSS += 'white-space:nowrap;';
		myCSS += 'border: 1px solid #999;';
		myCSS += 'filter:alpha(opacity=50);';
		myCSS += 'opacity:0.5;top:' + AlertBoxY + 'px;';
		myCSS += 'left:' + AlertBoxX + 'px;';
		myCSS += 'background-color:#FFC;';
		myCSS += 'z-index:' + (Zmax + 100) + ';';
		myCSS += 'height:' + AlertBoxHeight + 'px;';
		myCSS += 'width:' + AlertBoxWidth + 'px;';
		myCSS += 'overflow:auto;';
		myCSS += 'position:absolute;';

		myCSS += '-moz-box-shadow: ' + AlertBoxCSS_shadowX + ' ' + AlertBoxCSS_shadowY + ' ' + AlertBoxCSS_shadowBlur + ' ' + AlertBoxCSS_shadowColor + ';';
		myCSS += '-webkit-box-shadow: ' + AlertBoxCSS_shadowX + ' ' + AlertBoxCSS_shadowY + ' ' + AlertBoxCSS_shadowBlur + ' ' + AlertBoxCSS_shadowColor + ';';
		myCSS += 'box-shadow: ' + AlertBoxCSS_shadowX + ' ' + AlertBoxCSS_shadowY + ' ' + AlertBoxCSS_shadowBlur + ' ' + AlertBoxCSS_shadowColor + ';';
		
		/*
		// For IE 8
		myCSS += '-ms-filter: progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color=\'#000000\')"';
		// For IE 5.5 - 7
		myCSS += 'filter: progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color=\'#000000\')"';
		*/

		var obj = document.body.appendChild (document.createElement ('div'));
		obj.id = AlertDivID;
		obj.style.cssText = myCSS;
		AlertReady = true;
	}
	Write (text,AlertDivID, append);
}

function Write (text, id, append){
	if(id){
		var obj = document.getElementById(id);
		if(obj){
			if(append){
				obj.innerHTML += "<br>" + text;
			} else {
				obj.innerHTML = text;
			}
		}
	}
}

function AlertObj(theObj, append){
	var temp = "";
	for(var prop in theObj){
		temp += prop + " : " + theObj[prop] + "<br>";
	}
	Alert(temp, append);
}

