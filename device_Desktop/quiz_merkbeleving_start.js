if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
image15921.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj15921Img\" src=\"images/Achtergrond%20quiz_Titelpagina.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1365px; height: 767px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1365px; height: 767px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj15921",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Achtergrond quiz_Titelpagina"
	},
	objData:	{"a":[0,288,0,[0,0,1365,767]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1365,"height":767}}
};
textbutton536.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 145 57\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(72.5 28.5)\" style=\"\">\n	<path d=\"M 0 0 L 145 0 L 145 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-72.5, -28.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_2_6625\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"145\" height=\"57\" xlink:href=\"images/Button_start.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 145 0 L 145 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_6625&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-72.5, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(72.5 28.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 611px; top: 483px; width: 145px; height: 57px; z-index: 3; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj536",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Start button",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'Go to introductie',actItem:function(){ trivExitPage('quiz_merkbeleving_introductie.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[611,483,145,57]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":611,"y":483,"width":145,"height":57},"imgDataNormal":"images/desktop_shape536.png","imgDataOver":"images/desktop_shape536_over.png","imgDataDown":"images/desktop_shape536.png","imgDataDisabled":"images/desktop_shape536_disabled.png","svgDataNormal":"<g transform=\"translate(72.5 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 145 0 L 145 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-72.5, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_6625\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"145\" height=\"57\" xlink:href=\"images/Button_start.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 145 0 L 145 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_6625&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-72.5, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(72.5 28.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(72.5 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 145 0 L 145 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-72.5, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_6627\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"145\" height=\"57\" xlink:href=\"images/Button_start_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 145 0 L 145 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_6627&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-72.5, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(72.5 28.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(72.5 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 145 0 L 145 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-72.5, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_6629\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"145\" height=\"57\" xlink:href=\"images/Button_start.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 145 0 L 145 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_6629&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-72.5, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(72.5 28.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(72.5 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 145 0 L 145 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-72.5, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_6631\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"145\" height=\"57\" xlink:href=\"images/Button_start.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 145 0 L 145 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_6631&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-72.5, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(72.5 28.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text121.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 550px; min-height: 145px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 550px; min-height: 145px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:72pt; font-family:\'Titillium Web\'; color:#ffffff; \"><strong>Quiz time!</strong></span><span style=\" font-size:72pt; font-family:\'Arial\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 408px; top: 225px; width: 550px; height: 145px; z-index: 1;",
	cssClasses:	"module-title",
	htmlId:		"tobj121",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title Quiz"
	},
	objData:	{"a":[0,32,0,[408,225,550,145]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":408,"y":225,"width":550,"height":145},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text377.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 848px; min-height: 167px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 848px; min-height: 167px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:30pt; font-family:\'PT Sans\', sans-serif; color:#ffffff;\">Zorgverzekeringen in Nederland</span><span style=\" font-size:30pt; font-family:\'PT Sans\', sans-serif; color:#000000;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 259px; top: 357px; width: 848px; height: 167px; z-index: 2;",
	cssClasses:	"module-subtitle",
	htmlId:		"tobj377",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Subtitle quiz"
	},
	objData:	{"a":[0,32,0,[259,357,848,167]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":259,"y":357,"width":848,"height":167},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	1
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Button_start.png","images/Button_start_hover.png","images/Achtergrond%20quiz_Titelpagina.jpg"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
