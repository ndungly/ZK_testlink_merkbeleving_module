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
image29184.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj29184Img\" src=\"images/Achtergrond%20quiz_leeg.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1366px; height: 768px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj29184",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Achtergrond quiz_leeg"
	},
	objData:	{"a":[0,288,0,[0,0,1366,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768}}
};
textbutton29236.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 186 57\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(93 28.5)\" style=\"\">\n	<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_29183_7009\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"186\" height=\"57\" xlink:href=\"images/Button_sluit%20quiz.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_29183_7009&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(93 28.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 591px; top: 651px; width: 186px; height: 57px; z-index: 40; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj29236",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button sluit",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkExitClose',actItem:function(){ {cleanupTitle('quiz_merkbeleving.html'); trivExitPage('ObjLayerActionExit()',false);} 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[591,651,186,57]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":591,"y":651,"width":186,"height":57},"imgDataNormal":"images/desktop_shape29236.png","imgDataOver":"images/desktop_shape29236_over.png","imgDataDown":"images/desktop_shape29236.png","imgDataDisabled":"images/desktop_shape29236_disabled.png","svgDataNormal":"<g transform=\"translate(93 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_29183_7009\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"186\" height=\"57\" xlink:href=\"images/Button_sluit%20quiz.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_29183_7009&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(93 28.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(93 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_29183_7011\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"186\" height=\"57\" xlink:href=\"images/Button_sluit%20quiz_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_29183_7011&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(93 28.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(93 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_29183_7013\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"186\" height=\"57\" xlink:href=\"images/Button_sluit%20quiz.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_29183_7013&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(93 28.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(93 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_29183_7015\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"186\" height=\"57\" xlink:href=\"images/Button_sluit%20quiz.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 186 0 L 186 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_29183_7015&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(93 28.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og29233.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og29233",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image29200.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj29200Img\" src=\"images/Resultaten_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 280px; height: 305px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 268px; top: 336px; width: 280px; height: 305px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj29200",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Resultaten_bg"
	},
	objData:	{"a":[0,288,0,[268,336,280,305]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":268,"y":336,"width":280,"height":305}}
};
text29209.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:30pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">0-99</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 308px; top: 445px; width: 198px; height: 65px; z-index: 2;",
	cssClasses:	"score",
	htmlId:		"tobj29209",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[308,445,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":308,"y":445,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text29221.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:24pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">punten</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 308px; top: 489px; width: 198px; height: 65px; z-index: 3;",
	cssClasses:	"score",
	htmlId:		"tobj29221",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[308,489,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":308,"y":489,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape29241.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 212 212\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(106 106)\" style=\"\">\n	<path d=\"M 0 106 A 106 106 0 1 1 212 106 A 106 106 0 1 1 0 106 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-106, -105.99999999999999) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(106 106)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 302px; top: 380px; width: 212px; height: 212px; z-index: 4; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj29241",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og29263.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og29233.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og29234.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og29235.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og29256.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton29236.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[302,380,212,212]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":302,"y":380,"width":212,"height":212},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape29241.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og29234.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og29234",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image29201.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj29201Img\" src=\"images/Resultaten_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 280px; height: 305px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 543px; top: 336px; width: 280px; height: 305px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj29201",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Resultaten_bg"
	},
	objData:	{"a":[0,288,0,[543,336,280,305]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":543,"y":336,"width":280,"height":305}}
};
text29213.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:30pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">100-199</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 584px; top: 445px; width: 198px; height: 65px; z-index: 6;",
	cssClasses:	"score",
	htmlId:		"tobj29213",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[584,445,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":584,"y":445,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text29225.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:24pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">punten</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 584px; top: 489px; width: 198px; height: 65px; z-index: 7;",
	cssClasses:	"score",
	htmlId:		"tobj29225",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[584,489,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":584,"y":489,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape29314.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 212 212\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(106 106)\" style=\"\">\n	<path d=\"M 0 106 A 106 106 0 1 1 212 106 A 106 106 0 1 1 0 106 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-106, -105.99999999999999) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(106 106)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 575px; top: 380px; width: 212px; height: 212px; z-index: 8; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj29314",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og29278.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og29233.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og29234.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og29235.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og29256.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton29236.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[575,380,212,212]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":575,"y":380,"width":212,"height":212},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape29241.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og29235.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og29235",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image29205.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj29205Img\" src=\"images/Resultaten_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 280px; height: 305px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 817px; top: 336px; width: 280px; height: 305px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj29205",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Resultaten_bg"
	},
	objData:	{"a":[0,288,0,[817,336,280,305]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":817,"y":336,"width":280,"height":305}}
};
text29217.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:30pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">200+</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 857px; top: 445px; width: 198px; height: 65px; z-index: 10;",
	cssClasses:	"score",
	htmlId:		"tobj29217",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[857,445,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":857,"y":445,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text29229.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:24pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">punten</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 857px; top: 489px; width: 198px; height: 65px; z-index: 11;",
	cssClasses:	"score",
	htmlId:		"tobj29229",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[857,489,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":857,"y":489,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape29324.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 212 212\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(106 106)\" style=\"\">\n	<path d=\"M 0 106 A 106 106 0 1 1 212 106 A 106 106 0 1 1 0 106 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-106, -105.99999999999999) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(106 106)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 850px; top: 380px; width: 212px; height: 212px; z-index: 12; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj29324",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og29296.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og29233.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og29234.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og29235.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og29256.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton29236.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[850,380,212,212]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":850,"y":380,"width":212,"height":212},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape29241.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og29256.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og29256",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text29196.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 675px; min-height: 130px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 675px; min-height: 130px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:72pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">" +  Varquiz_score.getValueForDisplay() + " </span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 344px; top: 104px; width: 675px; height: 130px; z-index: 13;",
	cssClasses:	"score",
	htmlId:		"tobj29196",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[344,104,675,130]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":344,"y":104,"width":675,"height":130},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text29188.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 582px; min-height: 100px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 582px; min-height: 100px;\"><p align=\"center\" leglh=\"1.752\" style=\"margin-left:0px;text-indent:0px;line-height:1.752;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:18pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(255, 255, 255);\">Lees hieronder wat je eindscore zegt over jouw kennis van zorgverzekeringen in Nederland.</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 390px; top: 246px; width: 582px; height: 100px; z-index: 14;",
	cssClasses:	"body-txt",
	htmlId:		"tobj29188",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text"
	},
	objData:	{"a":[0,32,0,[390,246,582,100]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":246,"width":582,"height":100},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text29192.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 582px; min-height: 50px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 582px; min-height: 50px;\"><p align=\"center\" leglh=\"1.752\" style=\"margin-left:0px;text-indent:0px;line-height:1.752;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:18pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(255, 255, 255);\">Jouw score:</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 390px; top: 72px; width: 582px; height: 50px; z-index: 15;",
	cssClasses:	"body-txt",
	htmlId:		"tobj29192",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Jouw score"
	},
	objData:	{"a":[0,32,0,[390,72,582,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":72,"width":582,"height":50},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og29263.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og29263",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape29261.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 768\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 384)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 768 L 0 768 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:0.5;filter:alpha(opacity=50); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -384) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 384)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.5;filter:alpha(opacity=50);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 1.7053e-13px; width: 1366px; height: 768px; z-index: 16; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj29261",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,0,0,[-1.1368683772161603e-13,1.7053025658242404e-13,1366,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape29261.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.5;\">"}
};
shape29243.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 870 365\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(435 182.5)\" style=\"\">\n	<path d=\"M 6.48 0 L 863.52 0 A 6.48 6.48 0 0 1 870 6.48 L 870 358.52 A 6.48 6.48 0 0 1 863.52 365 L 6.48 365 A 6.48 6.48 0 0 1 0 358.52 L 0 6.48 A 6.48 6.48 0 0 1 6.48 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-435, -182.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(435 182.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 248px; top: 253px; width: 870px; height: 365px; z-index: 17; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj29243",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[247.99999999999994,253.0000000000001,870,365]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":248,"y":253,"width":870,"height":365},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape29243.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image29264.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj29264Img\" src=\"images/Close.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 29px; height: 29px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1055px; top: 285px; width: 29px; height: 29px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj29264",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Close"
	},
	objData:	{"a":[0,256,0,[1055,285,29,29]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1055,"y":285,"width":29,"height":29}}
};
shape29266.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 58 56\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(29 28)\" style=\"\">\n	<path d=\"M 0 0 L 58 0 L 58 56 L 0 56 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -28) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(29 28)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1041px; top: 271px; width: 58px; height: 56px; z-index: 19; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj29266",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og29263.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowTxts',actItem:function(){ og29256.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow1',actItem:function(){ og29233.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow2',actItem:function(){ og29234.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow3',actItem:function(){ og29235.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowClose',actItem:function(){ textbutton29236.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[1041,271,58,56]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1041,"y":271,"width":58,"height":56},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape29266.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text29257.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 582px; min-height: 126px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 582px; min-height: 126px;\"><p align=\"center\" leglh=\"1.752\" style=\"margin-left:0px;text-indent:0px;line-height:1.752;margin-top:0px;margin-bottom:0px;\"><span style=\"color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, sans-serif; font-size:18pt;\">Helaas geen topscore voor jou! Maar maak je niet druk, door je werk als klantadviseur krijg je snel meer gevoel bij de zorg in Nederland.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 391px; top: 411px; width: 582px; height: 126px; z-index: 20;",
	cssClasses:	"body-txt",
	htmlId:		"tobj29257",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text"
	},
	objData:	{"a":[0,0,0,[391,411,582,126]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":391,"y":411,"width":582,"height":126},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image29244.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj29244Img\" src=\"images/Resultaten_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 280px; height: 305px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 543px; top: 101px; width: 280px; height: 305px; z-index: 21;",
	cssClasses:	"",
	htmlId:		"tobj29244",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Resultaten_bg"
	},
	objData:	{"a":[0,256,0,[543,101,280,305]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":543,"y":101,"width":280,"height":305}}
};
text29248.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:30pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">0-99</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 583px; top: 208px; width: 198px; height: 65px; z-index: 22;",
	cssClasses:	"score",
	htmlId:		"tobj29248",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,0,0,[583,208,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":208,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text29252.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:24pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">punten</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 583px; top: 252px; width: 198px; height: 65px; z-index: 23;",
	cssClasses:	"score",
	htmlId:		"tobj29252",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,0,0,[583,252,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":252,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og29278.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og29278",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape29279.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 768\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 384)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 768 L 0 768 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:0.5;filter:alpha(opacity=50); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -384) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 384)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.5;filter:alpha(opacity=50);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 1.7053e-13px; width: 1366px; height: 768px; z-index: 24; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj29279",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,0,0,[-1.1368683772161603e-13,1.7053025658242404e-13,1366,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape29261.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.5;\">"}
};
shape29280.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 870 365\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(435 182.5)\" style=\"\">\n	<path d=\"M 6.48 0 L 863.52 0 A 6.48 6.48 0 0 1 870 6.48 L 870 358.52 A 6.48 6.48 0 0 1 863.52 365 L 6.48 365 A 6.48 6.48 0 0 1 0 358.52 L 0 6.48 A 6.48 6.48 0 0 1 6.48 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-435, -182.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(435 182.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 248px; top: 253px; width: 870px; height: 365px; z-index: 25; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj29280",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[247.99999999999994,253.0000000000001,870,365]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":248,"y":253,"width":870,"height":365},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape29243.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image29281.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj29281Img\" src=\"images/Close.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 29px; height: 29px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1055px; top: 285px; width: 29px; height: 29px; z-index: 26;",
	cssClasses:	"",
	htmlId:		"tobj29281",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Close"
	},
	objData:	{"a":[0,256,0,[1055,285,29,29]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1055,"y":285,"width":29,"height":29}}
};
shape29282.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 58 56\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(29 28)\" style=\"\">\n	<path d=\"M 0 0 L 58 0 L 58 56 L 0 56 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -28) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(29 28)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1041px; top: 271px; width: 58px; height: 56px; z-index: 27; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj29282",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og29278.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowTxts',actItem:function(){ og29256.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow1',actItem:function(){ og29233.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow2',actItem:function(){ og29234.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow3',actItem:function(){ og29235.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowClose',actItem:function(){ textbutton29236.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[1041,271,58,56]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1041,"y":271,"width":58,"height":56},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape29266.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text29289.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 582px; min-height: 126px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 582px; min-height: 126px;\"><p align=\"center\" leglh=\"1.752\" style=\"margin-left:0px;text-indent:0px;line-height:1.752;margin-top:0px;margin-bottom:0px;\"><span style=\"color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, sans-serif; font-size:18pt;\">Goed bezig! Je kunt al aardig inschatten hoe het staat met zorgverzekeringen in Nederland. Dat helpt je om te snappen waar onze klanten Zilveren Kruis over bellen.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 391px; top: 411px; width: 582px; height: 126px; z-index: 28;",
	cssClasses:	"body-txt",
	htmlId:		"tobj29289",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text"
	},
	objData:	{"a":[0,0,0,[391,411,582,126]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":391,"y":411,"width":582,"height":126},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image29290.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj29290Img\" src=\"images/Resultaten_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 280px; height: 305px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 543px; top: 101px; width: 280px; height: 305px; z-index: 29;",
	cssClasses:	"",
	htmlId:		"tobj29290",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Resultaten_bg"
	},
	objData:	{"a":[0,256,0,[543,101,280,305]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":543,"y":101,"width":280,"height":305}}
};
text29291.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:30pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">100-199</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 583px; top: 208px; width: 198px; height: 65px; z-index: 30;",
	cssClasses:	"score",
	htmlId:		"tobj29291",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,0,0,[583,208,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":208,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text29292.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:24pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">punten</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 583px; top: 252px; width: 198px; height: 65px; z-index: 31;",
	cssClasses:	"score",
	htmlId:		"tobj29292",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,0,0,[583,252,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":252,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og29296.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og29296",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape29297.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 768\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 384)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 768 L 0 768 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:0.5;filter:alpha(opacity=50); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -384) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 384)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.5;filter:alpha(opacity=50);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 1.7053e-13px; width: 1366px; height: 768px; z-index: 32; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj29297",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,0,0,[-1.1368683772161603e-13,1.7053025658242404e-13,1366,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape29261.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.5;\">"}
};
shape29298.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 870 365\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(435 182.5)\" style=\"\">\n	<path d=\"M 6.48 0 L 863.52 0 A 6.48 6.48 0 0 1 870 6.48 L 870 358.52 A 6.48 6.48 0 0 1 863.52 365 L 6.48 365 A 6.48 6.48 0 0 1 0 358.52 L 0 6.48 A 6.48 6.48 0 0 1 6.48 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-435, -182.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(435 182.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 248px; top: 253px; width: 870px; height: 365px; z-index: 33; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj29298",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[247.99999999999994,253.0000000000001,870,365]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":248,"y":253,"width":870,"height":365},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape29243.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image29299.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj29299Img\" src=\"images/Close.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 29px; height: 29px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1055px; top: 285px; width: 29px; height: 29px; z-index: 34;",
	cssClasses:	"",
	htmlId:		"tobj29299",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Close"
	},
	objData:	{"a":[0,256,0,[1055,285,29,29]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1055,"y":285,"width":29,"height":29}}
};
shape29300.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 58 56\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(29 28)\" style=\"\">\n	<path d=\"M 0 0 L 58 0 L 58 56 L 0 56 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -28) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(29 28)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1041px; top: 271px; width: 58px; height: 56px; z-index: 35; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj29300",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og29296.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowTxts',actItem:function(){ og29256.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow1',actItem:function(){ og29233.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow2',actItem:function(){ og29234.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow3',actItem:function(){ og29235.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowClose',actItem:function(){ textbutton29236.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[1041,271,58,56]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1041,"y":271,"width":58,"height":56},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape29266.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text29307.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 582px; min-height: 126px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 582px; min-height: 126px;\"><p align=\"center\" leglh=\"1.752\" style=\"margin-left:0px;text-indent:0px;line-height:1.752;margin-top:0px;margin-bottom:0px;\"><span style=\"color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, sans-serif; font-size:18pt;\">Scherp staaltje werk! Met jouw kennis van zorgverzekeringen in Nederland zit het wel snor. Dit gaat zeker in je voordeel werken als klantadviseur.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 391px; top: 411px; width: 582px; height: 126px; z-index: 36;",
	cssClasses:	"body-txt",
	htmlId:		"tobj29307",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text"
	},
	objData:	{"a":[0,0,0,[391,411,582,126]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":391,"y":411,"width":582,"height":126},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image29308.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj29308Img\" src=\"images/Resultaten_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 280px; height: 305px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 543px; top: 101px; width: 280px; height: 305px; z-index: 37;",
	cssClasses:	"",
	htmlId:		"tobj29308",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Resultaten_bg"
	},
	objData:	{"a":[0,256,0,[543,101,280,305]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":543,"y":101,"width":280,"height":305}}
};
text29309.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:30pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">200+</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 583px; top: 208px; width: 198px; height: 65px; z-index: 38;",
	cssClasses:	"score",
	htmlId:		"tobj29309",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,0,0,[583,208,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":208,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text29310.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 198px; min-height: 65px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:24pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">punten</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 583px; top: 252px; width: 198px; height: 65px; z-index: 39;",
	cssClasses:	"score",
	htmlId:		"tobj29310",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,0,0,[583,252,198,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":252,"width":198,"height":65},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	43
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Achtergrond%20quiz_leeg.jpg","images/Resultaten_bg.png","images/Button_sluit%20quiz.png","images/Button_sluit%20quiz_hover.png","images/Close.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
