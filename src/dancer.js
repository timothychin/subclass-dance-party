var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  makeDancer.prototype.setPosition.call(this, top, left);
};

makeDancer.prototype.step = function() {
  console.log('dancerStep');
  setTimeout(this.step.bind(this), this.time);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};



