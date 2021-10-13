(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.copy1 = function() {
	this.initialize(img.copy1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.copy2 = function() {
	this.initialize(img.copy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mcLogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcLogo, new cjs.Rectangle(0,0,600,500), null);


(lib.mcImage1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcImage1, new cjs.Rectangle(0,0,600,500), null);


(lib.mcCTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CTA();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcCTA, new cjs.Rectangle(0,0,600,500), null);


(lib.mcCopy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcCopy2, new cjs.Rectangle(0,0,600,500), null);


(lib.mcCopy1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.copy1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcCopy1, new cjs.Rectangle(0,0,600,500), null);


(lib.mcClickTag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape.setTransform(60,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcClickTag, new cjs.Rectangle(0,0,120,600), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,286,287];
	// timeline functions:
	this.frame_0 = function() {
		/*
		var i;
		
		this.clickTag_mc.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.google.com", "_blank");
			console.log("clickTag");
		}
		*/
	}
	this.frame_286 = function() {
		this.stop();
		
		if (typeof i == 'undefined')
		{
		 i = -1;
		 this.play();
		 //this.stop();
		 i++;
		 //console.log(i+1);
		}
		
		if( i < 2)
		{
		 //console.log(i+2);
			console.log("loop");
		 this.play();
		 //this.stop();
		 i++;
		}
		
		
		if( i == 2)
		{
		 //console.log(i+2);
			//console.log("stop");
			console.log("loop is "+ i + ", stop ");
			this.stop();
		}
	}
	this.frame_287 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(286).call(this.frame_286).wait(1).call(this.frame_287).wait(1));

	// clickTag
	this.clickTag_mc = new lib.mcClickTag();
	this.clickTag_mc.name = "clickTag_mc";
	this.clickTag_mc.setTransform(150,125,2.5001,0.4167,0,0,0,60,300);
	new cjs.ButtonHelper(this.clickTag_mc, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.clickTag_mc).wait(288));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D8DADA").ss(1,2,0,3).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(288));

	// CTA
	this.instance = new lib.mcCTA();
	this.instance.setTransform(150,125,0.5,0.5,0,0,0,300,250);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(215).to({alpha:1},8,cjs.Ease.get(1)).wait(65));

	// copy2
	this.instance_1 = new lib.mcCopy2();
	this.instance_1.setTransform(150,125,0.5,0.5,0,0,0,300,250);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(143).to({alpha:1},8,cjs.Ease.get(1)).wait(137));

	// copy1
	this.instance_2 = new lib.mcCopy1();
	this.instance_2.setTransform(150,125,0.5,0.5,0,0,0,300,250);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(103).to({alpha:1},8,cjs.Ease.get(1)).wait(177));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_1 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_2 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_3 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_4 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_5 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_6 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_7 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_8 = new cjs.Graphics().p("A91K1IAA1pMA7rAAAIAAVpg");
	var mask_graphics_9 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_10 = new cjs.Graphics().p("A91K1IAA1pMA7rAAAIAAVpg");
	var mask_graphics_11 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_12 = new cjs.Graphics().p("A91K0IAA1nMA7rAAAIAAVng");
	var mask_graphics_13 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_14 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_15 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_16 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_17 = new cjs.Graphics().p("A91K0IAA1nMA7rAAAIAAVng");
	var mask_graphics_18 = new cjs.Graphics().p("A91K0IAA1nMA7rAAAIAAVng");
	var mask_graphics_19 = new cjs.Graphics().p("A91K1IAA1pMA7rAAAIAAVpg");
	var mask_graphics_20 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_21 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_22 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_23 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_24 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_25 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_26 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_27 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_28 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_29 = new cjs.Graphics().p("A91K0IAA1nMA7rAAAIAAVng");
	var mask_graphics_30 = new cjs.Graphics().p("A91K1IAA1pMA7rAAAIAAVpg");
	var mask_graphics_31 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_32 = new cjs.Graphics().p("A91K1IAA1pMA7rAAAIAAVpg");
	var mask_graphics_33 = new cjs.Graphics().p("A91K1IAA1pMA7rAAAIAAVpg");
	var mask_graphics_34 = new cjs.Graphics().p("A91K1IAA1pMA7rAAAIAAVpg");
	var mask_graphics_35 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_36 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_37 = new cjs.Graphics().p("A91K0IAA1nMA7rAAAIAAVng");
	var mask_graphics_38 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_39 = new cjs.Graphics().p("A91K0IAA1nMA7rAAAIAAVng");
	var mask_graphics_40 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_41 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_42 = new cjs.Graphics().p("A91K0IAA1nMA7rAAAIAAVng");
	var mask_graphics_43 = new cjs.Graphics().p("A91K1IAA1pMA7rAAAIAAVpg");
	var mask_graphics_44 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_45 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_46 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_47 = new cjs.Graphics().p("A91K1IAA1pMA7rAAAIAAVpg");
	var mask_graphics_48 = new cjs.Graphics().p("A91K0IAA1nMA7rAAAIAAVng");
	var mask_graphics_49 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_50 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_51 = new cjs.Graphics().p("A91K0IAA1nMA7rAAAIAAVng");
	var mask_graphics_52 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_53 = new cjs.Graphics().p("A91K0IAA1nMA7rAAAIAAVng");
	var mask_graphics_54 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_55 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_56 = new cjs.Graphics().p("A91K0IAA1nMA7rAAAIAAVng");
	var mask_graphics_57 = new cjs.Graphics().p("A91K0IAA1oMA7rAAAIAAVog");
	var mask_graphics_58 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");
	var mask_graphics_59 = new cjs.Graphics().p("A91K1IAA1oMA7rAAAIAAVog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:129.025,y:203.7}).wait(1).to({graphics:mask_graphics_1,x:129.025,y:201.8}).wait(1).to({graphics:mask_graphics_2,x:129.025,y:199.95}).wait(1).to({graphics:mask_graphics_3,x:129.025,y:198.15}).wait(1).to({graphics:mask_graphics_4,x:129.025,y:196.35}).wait(1).to({graphics:mask_graphics_5,x:129.025,y:194.55}).wait(1).to({graphics:mask_graphics_6,x:129.025,y:192.85}).wait(1).to({graphics:mask_graphics_7,x:129.025,y:191.15}).wait(1).to({graphics:mask_graphics_8,x:129.025,y:189.5}).wait(1).to({graphics:mask_graphics_9,x:129.025,y:187.85}).wait(1).to({graphics:mask_graphics_10,x:129.025,y:186.25}).wait(1).to({graphics:mask_graphics_11,x:129.025,y:184.7}).wait(1).to({graphics:mask_graphics_12,x:129.025,y:183.15}).wait(1).to({graphics:mask_graphics_13,x:129.025,y:181.65}).wait(1).to({graphics:mask_graphics_14,x:129.025,y:180.15}).wait(1).to({graphics:mask_graphics_15,x:129.025,y:178.75}).wait(1).to({graphics:mask_graphics_16,x:129.025,y:177.35}).wait(1).to({graphics:mask_graphics_17,x:129.025,y:175.95}).wait(1).to({graphics:mask_graphics_18,x:129.025,y:174.6}).wait(1).to({graphics:mask_graphics_19,x:129.025,y:173.3}).wait(1).to({graphics:mask_graphics_20,x:129.025,y:172.05}).wait(1).to({graphics:mask_graphics_21,x:129.025,y:170.8}).wait(1).to({graphics:mask_graphics_22,x:129.025,y:169.55}).wait(1).to({graphics:mask_graphics_23,x:129.025,y:168.4}).wait(1).to({graphics:mask_graphics_24,x:129.025,y:167.25}).wait(1).to({graphics:mask_graphics_25,x:129.025,y:166.15}).wait(1).to({graphics:mask_graphics_26,x:129.025,y:165.05}).wait(1).to({graphics:mask_graphics_27,x:129.025,y:164}).wait(1).to({graphics:mask_graphics_28,x:129.025,y:163}).wait(1).to({graphics:mask_graphics_29,x:129.025,y:162}).wait(1).to({graphics:mask_graphics_30,x:129.025,y:161.05}).wait(1).to({graphics:mask_graphics_31,x:129.025,y:160.1}).wait(1).to({graphics:mask_graphics_32,x:129.025,y:159.25}).wait(1).to({graphics:mask_graphics_33,x:129.025,y:158.35}).wait(1).to({graphics:mask_graphics_34,x:129.025,y:157.55}).wait(1).to({graphics:mask_graphics_35,x:129.025,y:156.75}).wait(1).to({graphics:mask_graphics_36,x:129.025,y:156}).wait(1).to({graphics:mask_graphics_37,x:129.025,y:155.25}).wait(1).to({graphics:mask_graphics_38,x:129.025,y:154.6}).wait(1).to({graphics:mask_graphics_39,x:129.025,y:153.9}).wait(1).to({graphics:mask_graphics_40,x:129.025,y:153.3}).wait(1).to({graphics:mask_graphics_41,x:129.025,y:152.7}).wait(1).to({graphics:mask_graphics_42,x:129.025,y:152.1}).wait(1).to({graphics:mask_graphics_43,x:129.025,y:151.6}).wait(1).to({graphics:mask_graphics_44,x:129.025,y:151.1}).wait(1).to({graphics:mask_graphics_45,x:129.025,y:150.6}).wait(1).to({graphics:mask_graphics_46,x:129.025,y:150.2}).wait(1).to({graphics:mask_graphics_47,x:129.025,y:149.8}).wait(1).to({graphics:mask_graphics_48,x:129.025,y:149.4}).wait(1).to({graphics:mask_graphics_49,x:129.025,y:149.05}).wait(1).to({graphics:mask_graphics_50,x:129.025,y:148.75}).wait(1).to({graphics:mask_graphics_51,x:129.025,y:148.5}).wait(1).to({graphics:mask_graphics_52,x:129.025,y:148.25}).wait(1).to({graphics:mask_graphics_53,x:129.025,y:148.05}).wait(1).to({graphics:mask_graphics_54,x:129.025,y:147.85}).wait(1).to({graphics:mask_graphics_55,x:129.025,y:147.7}).wait(1).to({graphics:mask_graphics_56,x:129.025,y:147.6}).wait(1).to({graphics:mask_graphics_57,x:129.025,y:147.5}).wait(1).to({graphics:mask_graphics_58,x:129.025,y:147.45}).wait(1).to({graphics:mask_graphics_59,x:129.025,y:147.45}).wait(229));

	// image1
	this.instance_3 = new lib.mcImage1();
	this.instance_3.setTransform(150,125,0.5,0.5,0,0,0,300,250);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95).to({alpha:0},8,cjs.Ease.get(1)).wait(185));

	// logo
	this.instance_4 = new lib.mcLogo();
	this.instance_4.setTransform(150,125,0.5,0.5,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(288));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,151,126);
// library properties:
lib.properties = {
	id: 'CD0B9AAE894E4F1FAE7117107336388A',
	width: 300,
	height: 250,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/copy1.png?1634120756086", id:"copy1"},
		{src:"images/copy2.png?1634120756086", id:"copy2"},
		{src:"images/CTA.png?1634120756086", id:"CTA"},
		{src:"images/image1.png?1634120756086", id:"image1"},
		{src:"images/logo.png?1634120756086", id:"logo"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CD0B9AAE894E4F1FAE7117107336388A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;