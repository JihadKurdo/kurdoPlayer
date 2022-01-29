var body = document.querySelector("body");
var head = document.querySelector("head");
var player = document.querySelector(".player");

var video = document.createElement("video");
video.setAttribute("playsinline", "");
video.style.width = player.dataset.width;
video.src = player.dataset.src;
video.poster = player.dataset.poster;
player.appendChild(video);

var subSrc = [];
subSrc = player.dataset.subsrc.split(",");

var srcLang = [];
srcLang = player.dataset.srclang.split(",");

var label = [];
label = player.dataset.label.split(",");

var track = document.createElement("track");
track.setAttribute("default", "");
track.label = "Off";
track.kind = "subtitles";
video.appendChild(track);

var controlsBtnToggle = document.createElement("div");
controlsBtnToggle.classList.add("controlsBtnToggle");
player.appendChild(controlsBtnToggle);

var controlsBtnToggleImg = document.createElement("img");
controlsBtnToggleImg.src = "https://storage.googleapis.com/webdevcourse/player/eye.webp";
controlsBtnToggle.appendChild(controlsBtnToggleImg);

var playerContainer = document.createElement("div");
playerContainer.classList.add("player_container");
player.appendChild(playerContainer);

var timeScroll = document.createElement("input");
timeScroll.classList.add("timeScroll");
timeScroll.type = "range";
timeScroll.value = "0";
timeScroll.min = "0";
timeScroll.max = "100";
playerContainer.appendChild(timeScroll);

var controlsContainer = document.createElement("div");
controlsContainer.classList.add("controls_container");
playerContainer.appendChild(controlsContainer);

var controlsLeft = document.createElement("div");
controlsLeft.classList.add("controls_left");
controlsContainer.appendChild(controlsLeft);

var sound = document.createElement("div");
sound.classList.add("controls");
sound.classList.add("sound");
controlsLeft.appendChild(sound);

var soundImg = document.createElement("img");
soundImg.src = "https://storage.googleapis.com/webdevcourse/player/high.webp";
sound.appendChild(soundImg);

var soundScroll = document.createElement("input");
soundScroll.classList.add("soundScroll");
soundScroll.type = "range";
soundScroll.value = "100";
soundScroll.min = "0";
soundScroll.max = "100";
controlsLeft.appendChild(soundScroll);

var time = document.createElement("div");
time.classList.add("time");
controlsLeft.appendChild(time);

var small = document.createElement("small");
time.appendChild(small);

var vidCurrentTime = document.createElement("span");
vidCurrentTime.classList.add("vidCurrentTime");
vidCurrentTime.textContent = "0:00";
small.appendChild(vidCurrentTime);

var sep = document.createElement("span");
sep.textContent = "/";
small.appendChild(sep);

var vidLength = document.createElement("span");
vidLength.classList.add("vidLength");
vidLength.textContent = "0:00";
small.appendChild(vidLength);

var controlsCenter = document.createElement("div");
controlsCenter.classList.add("controls_center");
controlsContainer.appendChild(controlsCenter);

var tenSecBefore = document.createElement("div");
tenSecBefore.classList.add("tenSecBefore");
tenSecBefore.classList.add("controls");
controlsCenter.appendChild(tenSecBefore);

var tenSecBeforeImg = document.createElement("img");
tenSecBeforeImg.src = "https://storage.googleapis.com/webdevcourse/player/-10.webp";
tenSecBefore.appendChild(tenSecBeforeImg);

var playMini = document.createElement("div");
playMini.classList.add("controls");
playMini.classList.add("playMini");
controlsCenter.appendChild(playMini);

var playImg = document.createElement("img");
playImg.src = "https://storage.googleapis.com/webdevcourse/player/play.webp";
playMini.appendChild(playImg);

var tenSecAhead = document.createElement("div");
tenSecAhead.classList.add("controls");
tenSecAhead.classList.add("tenSecAhead");
controlsCenter.appendChild(tenSecAhead);

var tenSecAheadImg = document.createElement("img");
tenSecAheadImg.src = "https://storage.googleapis.com/webdevcourse/player/+10.webp";
tenSecAhead.appendChild(tenSecAheadImg);

var controlsRight = document.createElement("div");
controlsRight.classList.add("controls_right");
controlsContainer.appendChild(controlsRight);

var gearDiv = document.createElement("div");
gearDiv.classList.add("controls");
gearDiv.classList.add("gear");
controlsRight.appendChild(gearDiv);

var gear = document.createElement("img");
gear.src = "https://storage.googleapis.com/webdevcourse/player/gear.webp";
gearDiv.appendChild(gear);

var settings = document.createElement("div");
settings.classList.add("settings");
settings.classList.add("off");
gearDiv.appendChild(settings);

var settingsOne = document.createElement("div");
settingsOne.classList.add("settingsOne");
settingsOne.classList.add("on");
settings.appendChild(settingsOne);

var settingsTitle = document.createElement("div");
settingsTitle.classList.add("title");
settingsTitle.textContent = "Settings";
settingsOne.appendChild(settingsTitle);

var settingsOptOne = document.createElement("div");
settingsOptOne.classList.add("option");
settingsOne.appendChild(settingsOptOne);

var loop = document.createElement("div");
loop.classList.add("loop");
loop.textContent = "Loop";
settingsOptOne.appendChild(loop);

var loopScroll = document.createElement("input");
loopScroll.classList.add("loopScroll");
loopScroll.type = "range";
loopScroll.value = "0";
loopScroll.min = "0";
loopScroll.max = "1";
settingsOptOne.appendChild(loopScroll);

var settingsOptTwo = document.createElement("div");
settingsOptTwo.classList.add("option");
settingsOne.appendChild(settingsOptTwo);

var speed = document.createElement("div");
speed.classList.add("speed");
speed.textContent = "Speed";
settingsOptTwo.appendChild(speed);

var settingsOptThree = document.createElement("div");
settingsOptThree.classList.add("option");
settingsOne.appendChild(settingsOptThree);

var sub = document.createElement("div");
sub.classList.add("sub");
sub.textContent = "Subtitles";
settingsOptThree.appendChild(sub);

var settingsTwo = document.createElement("div");
settingsTwo.classList.add("settingsTwo");
settingsTwo.classList.add("off");
settings.appendChild(settingsTwo);

var speedTitle = document.createElement("div");
speedTitle.classList.add("title");
settingsTwo.appendChild(speedTitle);

var speedSpan = document.createElement("span");
speedSpan.textContent = "Speed";
speedTitle.appendChild(speedSpan);

var back = document.createElement("span");
back.classList.add("back");
back.textContent = "×";
speedTitle.appendChild(back);

var speedOptions = document.createElement("div");
speedOptions.classList.add("speedOptions");
settingsTwo.appendChild(speedOptions);

var _025 = document.createElement("div");
_025.setAttributeNode(document.createAttribute("data-speed"));
_025.dataset.speed = "0.25";
_025.textContent = "0.25x";
speedOptions.appendChild(_025);

var _05 = document.createElement("div");
_05.setAttributeNode(document.createAttribute("data-speed"));
_05.dataset.speed = "0.5";
_05.textContent = "0.5x";
speedOptions.appendChild(_05);

var _75 = document.createElement("div");
_75.setAttributeNode(document.createAttribute("data-speed"));
_75.dataset.speed = "0.75";
_75.textContent = "0.75x";
speedOptions.appendChild(_75);

var _1 = document.createElement("div");
_1.setAttributeNode(document.createAttribute("data-speed"));
_1.dataset.speed = "1";
_1.textContent = "1x";
speedOptions.appendChild(_1);

var _125 = document.createElement("div");
_125.setAttributeNode(document.createAttribute("data-speed"));
_125.dataset.speed = "1.25";
_125.textContent = "1.25x";
speedOptions.appendChild(_125);

var _15 = document.createElement("div");
_15.setAttributeNode(document.createAttribute("data-speed"));
_15.dataset.speed = "1.5";
_15.textContent = "1.5x";
speedOptions.appendChild(_15);

var _175 = document.createElement("div");
_175.setAttributeNode(document.createAttribute("data-speed"));
_175.dataset.speed = "1.75";
_175.textContent = "1.75x";
speedOptions.appendChild(_175);

var _2 = document.createElement("div");
_2.setAttributeNode(document.createAttribute("data-speed"));
_2.dataset.speed = "2";
_2.textContent = "2x";
speedOptions.appendChild(_2);

var settingsThree = document.createElement("div");
settingsThree.classList.add("settingsThree");
settingsThree.classList.add("off");
settings.appendChild(settingsThree);

var subTitle = document.createElement("div");
subTitle.classList.add("title");
settingsThree.appendChild(subTitle);

var subSpan = document.createElement("span");
subSpan.textContent = "Subtitles";
subTitle.appendChild(subSpan);

var subBack = document.createElement("span");
subBack.classList.add("back");
subBack.textContent = "×";
subTitle.appendChild(subBack);

var subOptions = document.createElement("div");
subOptions.classList.add("subOptions");
settingsThree.appendChild(subOptions);

var subLangs = document.createElement("div");
subLangs.setAttributeNode(document.createAttribute("data-sublang"));
subLangs.setAttribute("onclick", "changeSubSrc(this)");
subLangs.dataset.sublang = "off";
subLangs.classList.add("selected");
subLangs.textContent = "Off";
subOptions.appendChild(subLangs);

for(x = 0; x < subSrc.length; x++){
	var subLangs = document.createElement("div");
	subLangs.setAttributeNode(document.createAttribute("data-src"));
	subLangs.setAttributeNode(document.createAttribute("data-sublang"));
	subLangs.setAttributeNode(document.createAttribute("data-label"));
	subLangs.setAttribute("onclick", "changeSubSrc(this)");
	subLangs.dataset.src = subSrc[x];
	subLangs.dataset.sublang = srcLang[x];
	subLangs.dataset.label = label[x];
	subLangs.textContent = label[x];
	subOptions.appendChild(subLangs);
}

var fS = document.createElement("div");
fS.classList.add("controls");
fS.classList.add("fS");
controlsRight.appendChild(fS);

var fsImg = document.createElement("img");
fsImg.src = "https://storage.googleapis.com/webdevcourse/player/fullscreen.webp";
fS.appendChild(fsImg);

function changeSubSrc(obg){
	var allTheSubBtns = document.querySelectorAll("[data-sublang]");
	for(j = 0; j < allTheSubBtns.length; j++){
		if (allTheSubBtns[j].classList.contains("selected")) {
			allTheSubBtns[j].classList.remove("selected");
		}
	}
	if (obg.dataset.sublang == "off") {
		track.src = "";
		track.srclang = "";
		track.label = "Off";
		obg.classList.add("selected");
	}
	else{
		track.src = obg.dataset.src;
		track.srclang = obg.dataset.sublang;
		track.label = obg.dataset.label;
		obg.classList.add("selected");
	}
	setTimeout(() => {
		subF(-4);
	},1000)
}

function Scrolls(){
	var scroll = document.querySelectorAll("input[type=range]");
	for (const a of scroll) {
	  var value = (a.value-a.min)/(a.max-a.min)*100;
	  a.style.background = 'linear-gradient(to right, #00abffa8 0%, #00abffa8 ' + value + '%, #547b93ab ' + value + '%, #547b93ab 100%)'
	}
}

function SpeedCheck(){
	var divs = document.querySelectorAll(".speedOptions div");
	for (const a of divs) {
		if(a.dataset.speed == video.playbackRate){
			a.classList.add("selected");
		}
		else{
			if (a.classList.contains("selected")) {
				a.classList.remove("selected");
			}
		}
	}
}
SpeedCheck()

function controlsToggle() {
	if(!settings.classList.contains("on")){
		if (playerContainer.classList.contains("controlsOff")) {
			playerContainer.classList.remove("controlsOff");
			controlsBtnToggleImg.classList.remove("controlsToggleImg");
			subF(-4);
		}
		else{
			playerContainer.classList.add("controlsOff");
			controlsBtnToggleImg.classList.add("controlsToggleImg");
			setTimeout(() => {
				subF(-2);
			},1000)
		}
	}
	else{
		settings.classList.remove("on");
		settings.classList.add("off");
	}
}

setInterval(() => {
	video.volume = soundScroll.value / 100;
	var videoVolume = video.volume;
	if(videoVolume <= .01){
		video.muted = true;
		soundImg.src = "https://storage.googleapis.com/webdevcourse/player/none.webp";
	}
	else if (videoVolume >= .01 && videoVolume <= .33){
		video.muted = false;
		soundImg.src = "https://storage.googleapis.com/webdevcourse/player/low.webp";
	}
	else if (videoVolume >= .33 && videoVolume <= .66){
		video.muted = false;
		soundImg.src = "https://storage.googleapis.com/webdevcourse/player/mid.webp";
	}
	else{
		video.muted = false;
		soundImg.src = "https://storage.googleapis.com/webdevcourse/player/high.webp";
	}

	if(!video.paused){
		timeScroll.max = parseInt(video.duration);
		timeScroll.value = parseInt(video.currentTime);
	}
	else{
		playImg.src = "https://storage.googleapis.com/webdevcourse/player/play.webp";
	}

},10);

setInterval(() => {
	Scrolls();
	vidTimer(video.duration,vidLength);
	vidTimer(video.currentTime,vidCurrentTime);
},1000);

function vidTimer(seconds,output){
	if (seconds){
		let length = "";
		let sec = parseInt(seconds),min,hr;
		min = parseInt(sec/60);
		hr = parseInt(min/60);
		let s=sec%60,m=min%60,h=hr%24;
		if (h != 0) {
			length = h + ":";
		}
		s = s.toString();
		if(s.length == 1){
			s = "0" + s;
		}
		length += m + ":" + s;
		output.textContent = length;
	}
}

function timeScrollDown() {
	video.pause();
	playImg.src = "https://storage.googleapis.com/webdevcourse/player/play.webp";
	video.currentTime = timeScroll.value;
	Scrolls()
}

function timeScrollUp() {
	video.play();
	playImg.src = "https://storage.googleapis.com/webdevcourse/player/pause.webp";
	video.currentTime = timeScroll.value;
	Scrolls()
}

function tSB() {
	video.currentTime -= 10;
	timeScroll.value = parseInt(video.currentTime);
	Scrolls()
}

function tSA() {
	video.currentTime += 10;
	timeScroll.value = parseInt(video.currentTime);
	Scrolls()
}

function subF(val){
	for(i = 0; i < track.track.cues.length; i++){
		track.track.cues[i].line = val;
	}
}

function playVid() {
	if (playerContainer.classList.contains("controlsOff")) {
		playerContainer.classList.remove("controlsOff");
		controlsBtnToggleImg.classList.remove("controlsToggleImg");
		subF(-4);
	}
	else{
		if(settings.classList.contains("on")){
			settings.classList.add("off");
			settings.classList.remove("on");
		}
		else{
			if(video.paused){
				video.play();
				playImg.src = "https://storage.googleapis.com/webdevcourse/player/pause.webp";
				subF(-4);
			}
			else{
				video.pause();
				playImg.src = "https://storage.googleapis.com/webdevcourse/player/play.webp";
				subF(-4);
			}
		}
	}
}

function muteVid() {
	if(video.muted){
		video.muted = false;
		video.volume = 1;
		soundScroll.value = video.volume * 100;
		soundImg.src = "https://storage.googleapis.com/webdevcourse/player/high.webp";
	}
	else{
		video.muted = true;
		video.volume = 0;
		soundScroll.value = video.volume * 100;
		soundImg.src = "https://storage.googleapis.com/webdevcourse/player/none.webp";
	}
}

function loopVid() {
	if(video.loop){
		video.loop = false;
		loopScroll.value = 0;
	}
	else{
		video.loop = true;
		loopScroll.value = 1;
	}
	Scrolls();
}

function fullS(){
  if (video.webkitEnterFullScreen) {
    video.webkitEnterFullScreen();
    subF(-2);
  }
  else {
    video.requestFullscreen();
    subF(-2);
  }
}

function volUp(){
	if(video.volume <= .9){
		video.volume += .1;
		soundScroll.value = video.volume * 100;
	}
}

function volDown(){
	if(video.volume >= 0.1){
		video.volume -= .1;
		soundScroll.value = video.volume * 100;
	}
}

function settingsToggle() {
	if(settings.classList.contains("off")){
		settings.classList.add("on");
		settings.classList.remove("off");
	}
	else{
		settings.classList.add("off");
		settings.classList.remove("on");
	}
}

function speedToggle() {
	if(settingsTwo.classList.contains("off")){
		settingsOne.classList.add("off");
		settingsOne.classList.remove("on");
		settingsTwo.classList.add("on");
		settingsTwo.classList.remove("off");
	}
	else{
		settingsOne.classList.add("on");
		settingsOne.classList.remove("off");
		settingsTwo.classList.add("off");
		settingsTwo.classList.remove("on");
	}
}

function subToggle() {
	if(settingsThree.classList.contains("off")){
		settingsOne.classList.add("off");
		settingsOne.classList.remove("on");
		settingsThree.classList.add("on");
		settingsThree.classList.remove("off");
	}
	else{
		settingsOne.classList.add("on");
		settingsOne.classList.remove("off");
		settingsThree.classList.add("off");
		settingsThree.classList.remove("on");
	}
}

function speedChange(rate) {
	video.playbackRate = rate;
	SpeedCheck()
}

controlsBtnToggle.addEventListener("click", () =>{
	controlsToggle();
});

body.onkeydown = (e) => {
	var x = e.keyCode;
	if (x == 76){
		loopVid();
	}
	if (x == 32){
		playVid();
	}
	if (x == 37){
		tSB();
	}
	if (x == 39){
		tSA();
	}
	if (x == 77){
		muteVid();
	}
	if (x == 70){
		fullS();
	}
	if (x == 38){
		volUp();
	}
	if (x == 40){
		volDown();
	}
}

timeScroll.addEventListener("mousedown", () => {timeScrollDown()});
timeScroll.addEventListener("mouseup", () => {timeScrollUp()});
timeScroll.addEventListener("pointerdown", () => {timeScrollDown()});
timeScroll.addEventListener("pointerup", () => {timeScrollUp()});
timeScroll.addEventListener("touchstart", () => {timeScrollDown()});
timeScroll.addEventListener("touchend", () => {timeScrollUp()});

tenSecBefore.addEventListener("click", () =>{tSB()});
tenSecAhead.addEventListener("click", () =>{tSA()});
video.addEventListener("click", () =>{playVid()});
playMini.addEventListener("click", () =>{playVid()});
sound.addEventListener("click", () =>{muteVid()});
loopScroll.addEventListener("click", () =>{loopVid()});
fS.addEventListener("click", () =>{fullS()});
video.addEventListener("dblclick", () =>{fullS()});
gear.addEventListener("click", () =>{settingsToggle()});
speed.addEventListener("click", () =>{speedToggle()});
sub.addEventListener("click", () =>{subToggle()});
back.addEventListener("click", () =>{speedToggle()});
subBack.addEventListener("click", () =>{subToggle()});

_025.addEventListener("click", () =>{speedChange(_025.dataset.speed)});
_05.addEventListener("click", () =>{speedChange(_05.dataset.speed)});
_75.addEventListener("click", () =>{speedChange(_75.dataset.speed)});
_1.addEventListener("click", () =>{speedChange(_1.dataset.speed)});
_125.addEventListener("click", () =>{speedChange(_125.dataset.speed)});
_15.addEventListener("click", () =>{speedChange(_15.dataset.speed)});
_175.addEventListener("click", () =>{speedChange(_175.dataset.speed)});
_2.addEventListener("click", () =>{speedChange(_2.dataset.speed)});
