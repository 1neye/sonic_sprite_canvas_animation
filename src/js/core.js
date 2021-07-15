"use strict";

var canvas = {
  c: null,
  canvas: null,
  sprite: null,
  frame: 0,
  init: function init() {
    this.c = document.getElementById('canvas').getContext('2d');
    this.canvas = document.getElementById('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },
  anim: function anim() {
    var _this = this;

    setInterval(function () {
      _this.frame++;

      if (_this.frame > 22) {
        _this.frame = 0;
      }
    }, 30);
  },
  render: function render() {
    this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.sprite = new Image();
    this.sprite.src = '../img/sonic1.png'; // this.c.drawImage(this.sprite, 0, 0)

    this.c.drawImage(this.sprite, this.frame * 100, 0, 100, 100, 0, 0, 100, 100);
  },
  run: function run() {
    var _this2 = this;

    window.requestAnimationFrame(function () {
      _this2.render();

      _this2.run();
    });
  },
  start: function start() {
    this.init();
    this.anim();
    this.run();
  }
};
window.addEventListener('load', function () {
  canvas.start();
});