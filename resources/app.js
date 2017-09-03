
(function (){


// Module Pattern
// Module Pattern
// Module Pattern
// Module Pattern
// Module Pattern

var drumKit = {
 //////////......initializing the module.
 init: function(){
  this.domElement();
  this.playingEvent();
  this.endingEvent();
 },

 ///////////......selecting the dom elements.
 domElement: function(){
  this.keys = document.querySelectorAll('.key');
 },

 //////////.......tha actual playing functionality.
 playSound: function(e){
  var audio = document.querySelector('audio[data-key = "' + e.keyCode + '"]');
  var key = document.querySelector('.key[data-key = "' + e.keyCode + '"]');

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
 },

 ///////////......removing the animation.
 removeAnimation: function (e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
 },

 //////////......binding the playing event.
 playingEvent: function(){
  window.addEventListener('keydown', this.playSound);
 },

 /////////.......binding the animation removal.
 endingEvent: function(){
  this.keys.forEach(key => key.addEventListener('transitionend', this.removeAnimation));
 }
}
drumKit.init();
})();