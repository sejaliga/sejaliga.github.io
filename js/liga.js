function goDC() {
  /*var itemsDC = document.getElementsByClassName('dcComics');
  for (var i=0; i < itemsDC.length; i++) {
    itemsDC[i].style.display = 'none';
  }*/
  var noDCitems = document.getElementsByClassName('noDC');
  for (var i=0; i < noDCitems.length; i++) {
    noDCitems[i].style.display = 'none';
  }
}

function goTodos() {
  var itemsTodos = document.getElementsByClassName('todos');
  for (var i=0; i < itemsTodos.length; i++) {
    itemsTodos[i].style.display = 'block';
  }
}
