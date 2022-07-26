class MakeBob extends MakeVillager {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<span class="bob"></span>');
    this.$node.prepend('<img src= "https://i.gifer.com/embedded/download/2ulv.gif" width="50"/>');
    this.setPosition(top, left);
  }

  step() {
  }

  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
  }
}

window.MakeBob = MakeBob;
