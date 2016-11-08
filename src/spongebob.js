var makeSpongebob = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.time = timeBetweenSteps;
  this.oldStep = makeDancer.prototype.step;
  this.jump = false;
};

makeSpongebob.prototype = Object.create(makeDancer.prototype);
makeSpongebob.prototype.constructor = makeSpongebob;

makeSpongebob.prototype.step = function() {
  this.oldStep.call(this, this.time);
  this.$node.addClass('spongebob');

  this.$node.animate({
    top: '-=100'
  }, 300);
 
  this.$node.animate({
    top: '+=100'
  }, 200);
};









