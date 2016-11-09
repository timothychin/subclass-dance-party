var makeSpongebob = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.time = timeBetweenSteps;
  this.oldStep = makeDancer.prototype.step;
  this.faded = false;
};

makeSpongebob.prototype = Object.create(makeDancer.prototype);
makeSpongebob.prototype.constructor = makeSpongebob;

makeSpongebob.prototype.step = function() {
  this.oldStep.call(this, 300);
  this.$node.addClass('spongebob');

  // this.$node.animate({
  //   left: '-=100'
  // }, 300);
 
  // this.$node.animate({
  //   left: '+=100'
  // }, 200);

  // this.$node.toggle();
  if (!this.faded) {
    this.$node.fadeOut(600);
    this.faded = true;    
  } else {
    this.$node.fadeIn(200);    
    this.faded = false;
  }
};










