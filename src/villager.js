class MakeVillager {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="villager"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(top, left);
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
  }
}

window.MakeVillager = MakeVillager;
