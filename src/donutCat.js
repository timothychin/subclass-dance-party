var makeDonutCat = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.time = timeBetweenSteps;
  this.oldStep = makeDancer.prototype.step;
};

makeDonutCat.prototype = Object.create(makeDancer.prototype);
makeDonutCat.prototype.constructor = makeDonutCat;

makeDonutCat.prototype.step = function() {
  this.oldStep.call(this);
  this.$node.addClass('donutCat');
  
};









