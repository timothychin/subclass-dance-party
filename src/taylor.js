var makeTaylor = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.time = timeBetweenSteps;
  this.oldStep = makeDancer.prototype.step;
};

makeTaylor.prototype = Object.create(makeDancer.prototype);
makeTaylor.prototype.constructor = makeTaylor;

makeTaylor.prototype.step = function() {
  this.oldStep.call(this);
  this.$node.addClass('taylor');

  this.$node.animate({
    left: '+=100'
  }, 500);
 
  this.$node.animate({
    left: '-=100'
  }, 500);

};

















