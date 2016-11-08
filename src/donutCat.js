var makeDonutCat = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.time = timeBetweenSteps;
  this.oldStep = makeDancer.prototype.step;
  this.jump = false;
};

makeDonutCat.prototype = Object.create(makeDancer.prototype);
makeDonutCat.prototype.constructor = makeDonutCat;

makeDonutCat.prototype.step = function() {
  this.oldStep.call(this, this.time);
  this.$node.addClass('donutCat');

  this.$node.animate({
    height: '+=75',
    width: '+=75'
  }, 1000);
 
  this.$node.animate({
    height: '-=75',
    width: '-=75'
  }, 1000);
};









