window.addEventListener('load', function () {
  var parentNode = document.getElementById('grid');
  // create a new grid
  var grid = canvasDatagrid({
      parentNode: parentNode,
      data: [
          {col1: 'foo', col2: 0, col3: 'a'},
          {col1: 'bar', col2: 1, col3: 'b'},
          {col1: 'baz', col2: 2, col3: 'c'}
      ]
  });
});