class MakeTomNook extends MakeVillager {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<span class="tomNook"></span>');
    this.$node.prepend('<img src= "https://static.wikia.nocookie.net/forsmash-community/images/7/72/Tom_Nook.png/revision/latest?cb=20191222013743" width="50"/>');
    this.setPosition(top, left);
  }

  step() {
    super.step();
    this.$node.toggle();
  }

  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
  }
}

window.classList.add('addMakeTomNook');