/* TELA BIBLIOTECA */

function goTodos() {
  var itemsTodos = document.getElementsByClassName('todos');
  for (var i=0; i < itemsTodos.length; i++) {
    itemsTodos[i].style.display = 'block';
  }
}

function goDC() {
  var itemsDC = document.getElementsByClassName('dcComics');
  for (var i=0; i < itemsDC.length; i++) {
    itemsDC[i].style.display = 'block';
  }
  var noDCitems = document.getElementsByClassName('noDC');
  for (var i=0; i < noDCitems.length; i++) {
    noDCitems[i].style.display = 'none';
  }
}

function goMarvel() {
  var itemsMarvel = document.getElementsByClassName('marvelCom');
  for (var i=0; i < itemsMarvel.length; i++) {
    itemsMarvel[i].style.display = 'block';
  }
  var noMarvelitems = document.getElementsByClassName('noMarvel');
  for (var i=0; i < noMarvelitems.length; i++) {
    noMarvelitems[i].style.display = 'none';
  }
}

function goMSP() {
  var itemsMSP = document.getElementsByClassName('MSP');
  for (var i=0; i < itemsMSP.length; i++) {
    itemsMSP[i].style.display = 'block';
  }
  var noMSPitems = document.getElementsByClassName('noMSP');
  for (var i=0; i < noMSPitems.length; i++) {
    noMSPitems[i].style.display = 'none';
  }
}

function goAvulso() {
  var itemsAvulso = document.getElementsByClassName('Avulso');
  for (var i=0; i < itemsAvulso.length; i++) {
    itemsAvulso[i].style.display = 'block';
  }
  var noAvulsoitems = document.getElementsByClassName('noAvulso');
  for (var i=0; i < noAvulsoitems.length; i++) {
    noAvulsoitems[i].style.display = 'none';
  }
}

function goEnc() {
  var itemsEnc = document.getElementsByClassName('Enc');
  for (var i=0; i < itemsEnc.length; i++) {
    itemsEnc[i].style.display = 'block';
  }
  var noEncitems = document.getElementsByClassName('noEnc');
  for (var i=0; i < noEncitems.length; i++) {
    noEncitems[i].style.display = 'none';
  }
}

function goCol() {
  var itemsCol = document.getElementsByClassName('Col');
  for (var i=0; i < itemsCol.length; i++) {
    itemsCol[i].style.display = 'block';
  }
  var noColitems = document.getElementsByClassName('noCol');
  for (var i=0; i < noColitems.length; i++) {
    noColitems[i].style.display = 'none';
  }
}

function goManga() {
  var itemsManga = document.getElementsByClassName('Manga');
  for (var i=0; i < itemsManga.length; i++) {
    itemsManga[i].style.display = 'block';
  }
  var noMangaitems = document.getElementsByClassName('noManga');
  for (var i=0; i < noMangaitems.length; i++) {
    noMangaitems[i].style.display = 'none';
  }
}

/*********************/
/* TELA DE QUEM TEM */

function goTodosqt() {
  var itemsTodosqt = document.getElementsByClassName('todosqt');
  for (var i=0; i < itemsTodosqt.length; i++) {
    itemsTodosqt[i].style.display = 'flex';
  }
}

function goDoar() {
  var itemsDoa = document.getElementsByClassName('doar');
  for (var i=0; i < itemsDoa.length; i++) {
    itemsDoa[i].style.display = 'flex';
  }
  var itemsDoar = document.getElementsByClassName('noDoar');
  for (var i=0; i < itemsDoar.length; i++) {
    itemsDoar[i].style.display = 'none';
  }
}

function goTrocar() {
  var itemsTro = document.getElementsByClassName('troc');
  for (var i=0; i < itemsTro.length; i++) {
    itemsTro[i].style.display = 'flex';
  }
  var itemsTrocar = document.getElementsByClassName('noTroc');
  for (var i=0; i < itemsTrocar.length; i++) {
    itemsTrocar[i].style.display = 'none';
  }
}

function goEmp() {
  var itemsEm = document.getElementsByClassName('emp');
  for (var i=0; i < itemsEm.length; i++) {
    itemsEm[i].style.display = 'flex';
  }
  var itemsEmp = document.getElementsByClassName('noEmp');
  for (var i=0; i < itemsEmp.length; i++) {
    itemsEmp[i].style.display = 'none';
  }
}
