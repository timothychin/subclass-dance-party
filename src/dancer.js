var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  makeDancer.prototype.step.call(this);
  makeDancer.prototype.setPosition.call(this, top, left, 300);
};

makeDancer.prototype.step = function() {

  setTimeout(this.step.bind(this), 300);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};



