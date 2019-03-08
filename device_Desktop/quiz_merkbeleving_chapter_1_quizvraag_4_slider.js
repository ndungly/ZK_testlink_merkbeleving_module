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
	pageClick = function() {
		setTimeout( 'action24992()', 300); 
	};
}
image26880.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj26880Img\" src=\"images/Achtergrond%20quiz_leeg.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1366px; height: 768px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj26880",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Achtergrond quiz_leeg"
	},
	objData:	{"a":[0,288,0,[0,0,1366,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768}}
};
image26780.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj26780Img\" src=\"images/Score_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 378px; height: 165px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 494px; top: 0px; width: 378px; height: 165px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj26780",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Score_bg"
	},
	objData:	{"a":[0,288,0,[494,0,378,165]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":494,"y":0,"width":378,"height":165}}
};
text26778.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 69px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 69px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:18pt; font-family:\'PT Sans\', sans-serif; color:#002857;\">Jouw score:\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 583px; top: 17px; width: 200px; height: 69px; z-index: 2;",
	cssClasses:	"jouw-score",
	htmlId:		"tobj26778",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Subtitle quiz score"
	},
	objData:	{"a":[0,32,0,[583,17,200,69]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":17,"width":200,"height":69},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text26777.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 478px; min-height: 72px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 478px; min-height: 72px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:40pt; font-family:\'PT Sans\', sans-serif; color:#002857; \"><strong>" +  Varquiz_score.getValueForDisplay() + "\n</strong></span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 444px; top: 57px; width: 478px; height: 72px; z-index: 3;",
	cssClasses:	"score",
	htmlId:		"tobj26777",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[444,57,478,72]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":444,"y":57,"width":478,"height":72},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text24988.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 29px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 29px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'PT Sans\', sans-serif; color:#74c9e2;\">Vraag 4 van de 10</span><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#74c9e2;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 583px; top: 181px; width: 200px; height: 29px; z-index: 4;",
	cssClasses:	"question-no",
	htmlId:		"tobj24988",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Vraag 4 van 10"
	},
	objData:	{"a":[0,32,0,[583,181,200,29]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":181,"width":200,"height":29},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text24987.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 525px; min-height: 110px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 525px; min-height: 110px;\"><p leglh=\"1.752\" style=\"margin-left:0px;text-indent:0px;line-height:1.752;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:18pt; font-family:\'Titillium Web\'; color:#ffffff;\">Hoeveel miljoen mensen krijgen \n</span></p>\n<p leglh=\"1.752\" style=\"margin-left:0px;text-indent:0px;line-height:1.752;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:18pt; font-family:\'Titillium Web\'; color:#ffffff;\">in Nederland zorgtoeslag?</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 422px; top: 227px; width: 525px; height: 110px; z-index: 5;",
	cssClasses:	"body-txt",
	htmlId:		"tobj24987",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question"
	},
	objData:	{"a":[0,32,0,[422,227,525,110]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":422,"y":227,"width":525,"height":110},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text24986.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 32px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'PT Sans\', sans-serif; color:#74c9e2;\">Jouw inzet:</span><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#74c9e2;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 583px; top: 342px; width: 200px; height: 32px; z-index: 6;",
	cssClasses:	"question-no",
	htmlId:		"tobj24986",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Jouw inzet"
	},
	objData:	{"a":[0,32,0,[583,342,200,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":342,"width":200,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton24978.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 64 66\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(32 33)\" style=\"\">\n	<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_24886_6753\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_24886_6753&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(32 33)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 566px; top: 380px; width: 64px; height: 66px; z-index: 27; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj24978",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Inzet 10",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varinzet.set('10'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow10Selected',actItem:function(){ image24973.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide10Normal',actItem:function(){ textbutton24978.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide20',actItem:function(){ image24959.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow20Normal',actItem:function(){ textbutton24964.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide30',actItem:function(){ image24945.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow30Normal',actItem:function(){ textbutton24950.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[566,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":566,"y":380,"width":64,"height":66},"imgDataNormal":"images/desktop_shape3639.png","imgDataOver":"images/desktop_shape3639_over.png","imgDataDown":"images/desktop_shape3639_down.png","imgDataDisabled":"images/desktop_shape3639_disabled.png","svgDataNormal":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_24886_6753\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_24886_6753&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_24886_6755\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_24886_6755&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_24886_6757\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10_selected.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_24886_6757&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_24886_6759\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_24886_6759&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image24973.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj24973Img\" src=\"images/Inzet_10_selected.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 64px; height: 66px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 566px; top: 380px; width: 64px; height: 66px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj24973",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Inzet_10_selected"
	},
	objData:	{"a":[0,288,0,[566,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":566,"y":380,"width":64,"height":66}}
};
textbutton24964.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 64 66\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(32 33)\" style=\"\">\n	<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_24886_6761\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_24886_6761&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(32 33)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 651px; top: 380px; width: 64px; height: 66px; z-index: 28; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj24964",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Inzet 20",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varinzet.set('20'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow20Selected',actItem:function(){ image24959.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide20Normal',actItem:function(){ textbutton24964.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide10',actItem:function(){ image24973.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow10Normal',actItem:function(){ textbutton24978.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide30',actItem:function(){ image24945.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow30Normal',actItem:function(){ textbutton24950.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[651,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":651,"y":380,"width":64,"height":66},"imgDataNormal":"images/desktop_shape3314.png","imgDataOver":"images/desktop_shape3314_over.png","imgDataDown":"images/desktop_shape3314_down.png","imgDataDisabled":"images/desktop_shape3314_disabled.png","svgDataNormal":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_24886_6761\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_24886_6761&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_24886_6763\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_24886_6763&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_24886_6765\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20_selected.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_24886_6765&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_24886_6767\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20_disabled.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_24886_6767&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image24959.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj24959Img\" src=\"images/Inzet_20_selected.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 64px; height: 66px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 651px; top: 380px; width: 64px; height: 66px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj24959",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Inzet_20_selected"
	},
	objData:	{"a":[0,256,0,[651,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":651,"y":380,"width":64,"height":66}}
};
textbutton24950.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 64 66\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(32 33)\" style=\"\">\n	<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_24886_6769\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_24886_6769&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(32 33)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 736px; top: 380px; width: 64px; height: 66px; z-index: 29; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj24950",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Inzet 30",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varinzet.set('30'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow30Selected',actItem:function(){ image24945.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide30Normal',actItem:function(){ textbutton24950.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide20',actItem:function(){ image24959.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow20Normal',actItem:function(){ textbutton24964.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide10',actItem:function(){ image24973.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow10Normal',actItem:function(){ textbutton24978.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[736,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":736,"y":380,"width":64,"height":66},"imgDataNormal":"images/desktop_shape3480.png","imgDataOver":"images/desktop_shape3480_over.png","imgDataDown":"images/desktop_shape3480_down.png","imgDataDisabled":"images/desktop_shape3480_disabled.png","svgDataNormal":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_24886_6769\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_24886_6769&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_24886_6771\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_24886_6771&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_24886_6773\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30_selected.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_24886_6773&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_24886_6775\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30_disabled.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_24886_6775&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image24945.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj24945Img\" src=\"images/Inzet_30_selected.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 64px; height: 66px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 736px; top: 380px; width: 64px; height: 66px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj24945",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Inzet_30_selected"
	},
	objData:	{"a":[0,256,0,[736,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":736,"y":380,"width":64,"height":66}}
};
shape24943.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 406 3\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(203 1.5)\" style=\"\">\n	<path d=\"M 0 0 L 403 0\" style=\"stroke: rgb(255, 255, 255); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-201.5, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(203 8.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 482.5px; top: 542.5px; width: 406px; height: 3px; z-index: 10; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj24943",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[482.5,542.5,406,3]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":484,"y":544,"width":406,"height":3},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape20768.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape24941.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 23 23\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(11.5 11.5)\" style=\"\">\n	<path d=\"M 0 10 A 10 10 0 1 1 20 10 A 10 10 0 1 1 0 10 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 157, 218); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(11.5 11.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 471.5px; top: 532.5px; width: 23px; height: 23px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj24941",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Cirkel 1"
	},
	objData:	{"a":[0,32,0,[471.5,532.5,23,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":473,"y":534,"width":23,"height":23},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape13376.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape24937.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 20 A 20 20 0 1 1 40 20 A 20 20 0 1 1 0 20 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 463px; top: 524px; width: 40px; height: 40px; z-index: 12; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj24937",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area 1",
		"arChld":
	[
		{type:6,on:2,delay:300,name:'OnMClkGoToNextPage',actItem:function(){ trivExitPage('quiz_merkbeleving_chapter_1_fout_4.html',true,false);
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!Varquiz_score.lessThan('' +  Varinzet.getValueForDisplay() + ''))Varquiz_score.sub('' +  Varinzet.getValueForDisplay() + ''); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowDot1',actItem:function(){ shape24935.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[463,524,40,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":463,"y":524,"width":40,"height":40},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape20845.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape24935.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 36 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(18 18)\" style=\"\">\n	<path d=\"M 0 18 A 18 18 0 1 1 36 18 A 18 18 0 1 1 0 18 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(201, 58, 131); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(18 18) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 464px; top: 526px; width: 36px; height: 36px; z-index: 13; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj24935",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hidden cirkel 1"
	},
	objData:	{"a":[0,0,0,[464,526,36,36]],"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#A0144C","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":464,"y":526,"width":36,"height":36},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape14163.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text24933.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 78px; min-height: 63px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 78px; min-height: 63px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:18pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(255, 255, 255);\">1,5 </span></strong></p>\n\n<p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:18pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(255, 255, 255);\">miljoen</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 442px; top: 568px; width: 78px; height: 63px; z-index: 14;",
	cssClasses:	"",
	htmlId:		"tobj24933",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Antwoord 1"
	},
	objData:	{"a":[0,32,0,[442,568,78,63]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":442,"y":568,"width":78,"height":63},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape24932.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 23 23\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(11.5 11.5)\" style=\"\">\n	<path d=\"M 0 10 A 10 10 0 1 1 20 10 A 10 10 0 1 1 0 10 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 157, 218); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(11.5 11.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 605.5px; top: 532.5px; width: 23px; height: 23px; z-index: 15; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj24932",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Cirkel 2"
	},
	objData:	{"a":[0,32,0,[605.5,532.5,23,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":607,"y":534,"width":23,"height":23},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape13376.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape24928.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 20 A 20 20 0 1 1 40 20 A 20 20 0 1 1 0 20 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 597px; top: 524px; width: 40px; height: 40px; z-index: 16; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj24928",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area 2",
		"arChld":
	[
		{type:6,on:2,delay:300,name:'OnMClkGoToNextPage',actItem:function(){ trivExitPage('quiz_merkbeleving_chapter_1_fout_4.html',true,false);
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!Varquiz_score.lessThan('' +  Varinzet.getValueForDisplay() + ''))Varquiz_score.sub('' +  Varinzet.getValueForDisplay() + ''); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowDot2',actItem:function(){ shape24926.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[597,524,40,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":597,"y":524,"width":40,"height":40},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape20845.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape24926.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 36 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(18 18)\" style=\"\">\n	<path d=\"M 0 18 A 18 18 0 1 1 36 18 A 18 18 0 1 1 0 18 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(201, 58, 131); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(18 18) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 599px; top: 526px; width: 36px; height: 36px; z-index: 17; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj24926",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hidden cirkel 2"
	},
	objData:	{"a":[0,0,0,[599,526,36,36]],"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#A0144C","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":599,"y":526,"width":36,"height":36},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape14163.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text24924.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 94px; min-height: 63px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 94px; min-height: 63px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:18pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(255, 255, 255);\">2,5</span></strong></p>\n\n<p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:18pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(255, 255, 255);\">miljoen</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 569px; top: 568px; width: 94px; height: 63px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj24924",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Antwoord 2"
	},
	objData:	{"a":[0,32,0,[569,568,94,63]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":569,"y":568,"width":94,"height":63},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape24923.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 23 23\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(11.5 11.5)\" style=\"\">\n	<path d=\"M 0 10 A 10 10 0 1 1 20 10 A 10 10 0 1 1 0 10 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 157, 218); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(11.5 11.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 739.5px; top: 532.5px; width: 23px; height: 23px; z-index: 19; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj24923",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Cirkel 3"
	},
	objData:	{"a":[0,32,0,[739.5,532.5,23,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":741,"y":534,"width":23,"height":23},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape13376.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape24919.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 20 A 20 20 0 1 1 40 20 A 20 20 0 1 1 0 20 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 731px; top: 524px; width: 40px; height: 40px; z-index: 20; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj24919",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area 3",
		"arChld":
	[
		{type:6,on:2,delay:300,name:'OnMClkGoToNextPage',actItem:function(){ trivExitPage('quiz_merkbeleving_chapter_1_fout_4.html',true,false);
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!Varquiz_score.lessThan('' +  Varinzet.getValueForDisplay() + ''))Varquiz_score.sub('' +  Varinzet.getValueForDisplay() + ''); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowDot3',actItem:function(){ shape24917.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[731,524,40,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":731,"y":524,"width":40,"height":40},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape20845.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape24917.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 36 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(18 18)\" style=\"\">\n	<path d=\"M 0 18 A 18 18 0 1 1 36 18 A 18 18 0 1 1 0 18 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(201, 58, 131); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(18 18) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 734px; top: 526px; width: 36px; height: 36px; z-index: 21; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj24917",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hidden cirkel 3"
	},
	objData:	{"a":[0,0,0,[734,526,36,36]],"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#A0144C","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":734,"y":526,"width":36,"height":36},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape14163.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text24915.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 82px; min-height: 63px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 82px; min-height: 63px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:18pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(255, 255, 255);\">3,5</span></strong></p>\n\n<p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:18pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(255, 255, 255);\">miljoen</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 711px; top: 568px; width: 82px; height: 63px; z-index: 22;",
	cssClasses:	"",
	htmlId:		"tobj24915",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Antwoord 3"
	},
	objData:	{"a":[0,32,0,[711,568,82,63]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":711,"y":568,"width":82,"height":63},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape24914.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 23 23\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(11.5 11.5)\" style=\"\">\n	<path d=\"M 0 10 A 10 10 0 1 1 20 10 A 10 10 0 1 1 0 10 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 157, 218); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(11.5 11.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 873.5px; top: 532.5px; width: 23px; height: 23px; z-index: 23; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj24914",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Cirkel 4"
	},
	objData:	{"a":[0,32,0,[873.5,532.5,23,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":875,"y":534,"width":23,"height":23},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape13376.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape24910.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 20 A 20 20 0 1 1 40 20 A 20 20 0 1 1 0 20 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 865px; top: 524px; width: 40px; height: 40px; z-index: 24; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj24910",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area 4",
		"arChld":
	[
		{type:6,on:2,delay:300,name:'OnMClkGoToNextPage',actItem:function(){ trivExitPage('quiz_merkbeleving_chapter_1_goed_4.html',true,false);
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varquiz_score.add('' +  Varinzet.getValueForDisplay() + ''); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowDot4',actItem:function(){ shape24908.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[865,524,40,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":865,"y":524,"width":40,"height":40},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape20845.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape24908.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 36 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(18 18)\" style=\"\">\n	<path d=\"M 0 18 A 18 18 0 1 1 36 18 A 18 18 0 1 1 0 18 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(201, 58, 131); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(18 18) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 869px; top: 526px; width: 36px; height: 36px; z-index: 25; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj24908",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hidden cirkel 4"
	},
	objData:	{"a":[0,0,0,[869,526,36,36]],"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#A0144C","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":869,"y":526,"width":36,"height":36},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape14163.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text24906.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 80px; min-height: 63px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 80px; min-height: 63px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:18pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(255, 255, 255);\">4,5</span></strong></p>\n\n<p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:18pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(255, 255, 255);\">miljoen</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 847px; top: 568px; width: 80px; height: 63px; z-index: 26;",
	cssClasses:	"",
	htmlId:		"tobj24906",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Antwoord 4"
	},
	objData:	{"a":[0,32,0,[847,568,80,63]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":847,"y":568,"width":80,"height":63},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	15
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Achtergrond%20quiz_leeg.jpg","images/Inzet_10.png","images/Inzet_10_selected.png","images/Inzet_20.png","images/Inzet_20_disabled.png","images/Inzet_20_selected.png","images/Inzet_30.png","images/Inzet_30_disabled.png","images/Inzet_30_selected.png","images/Score_bg.png","images/Inzet_10_hover.png","images/Inzet_20_hover.png","images/Inzet_30_hover.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
