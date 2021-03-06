var assert = require('assert');
var board = require("../../js/board.js");
var b;

describe('test win', function() {
  it(`should not win`, function() {
    b = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    board.init(b);
    assert.equal(board.win(), false);
  });
  it(`should win`, function() {
    b = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    board.init(b);
    assert.equal(board.win(), 1);
  });

  it(`测试胜利`, function() {
    b = [
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 2, 1, 0, 2, 0, 1, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 2, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    board.init(b);
    assert.equal(board.win(), 2);
    assert.ok(board.evaluate(2) > 100000);
  });
});
