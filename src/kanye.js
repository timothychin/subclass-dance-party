var makeKanye = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.time = timeBetweenSteps;
  this.oldStep = makeDancer.prototype.step;
};

makeKanye.prototype = Object.create(makeDancer.prototype);
makeKanye.prototype.constructor = makeKanye;

makeKanye.prototype.step = function() {
  this.oldStep.call(this);
  this.$node.addClass('kanye');

  this.$node.animate({
    left: '-=100'
  }, 500);
 
  this.$node.animate({
    left: '+=100'
  }, 500);

};

















