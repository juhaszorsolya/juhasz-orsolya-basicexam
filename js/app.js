// ide deklaráljátok a függvényeket.
// 1. feladat
function advancedBubbleSortForUserDatasByCostInCredits(userDatas) {
  var i = userDatas.length;
  while ( i > 0 ) {
    var csere = 0;
    for ( var j = 0; j < i; j++) {
      if (userDatas[j] > userDatas[j + 1]) {
        [userDatas[j], userDatas[j + 1]] = [userDatas[j + 1], userDatas[j]];
        csere = j;
      }
    }
    i = csere;
  }
  return userDatas;
}

// 2. feladat
function deleteNullConsumabablesObjects(userDatas) {
  for ( var k in userDatas) {
    if (userDatas[k].consumables === null) {
      delete userDatas[k];
    }
  }
  return userDatas;
}

// 3.feladat
function changeNullValueToUnknown(userDatas) {
  for (var l in userDatas) {
    if (userDatas[l].id === null) {
      userDatas[l].id = 'unknown';
    }
    if (userDatas[l].denomination === null) {
      userDatas[l].denomination = 'unknown';
    }

    if (userDatas[l].cargo_capacity === null) {
      userDatas[l].caego_capacity = 'unknown';
    }

    if (userDatas[l].passengers === null) {
      userDatas[l].passengers = 'unknown';
    }

    if (userDatas[l].max_atmosphering_speed === null) {
      userDatas[l].max_atmosphering_speed = 'unknown';
    }

    if (userDatas[l].crew === null) {
      userDatas[l].crew = 'unknown';
    }

    if (userDatas[l].lengthiness === null) {
      userDatas[l].lengthiness = 'unknown';
    }

    if (userDatas[l].model === null) {
      userDatas[l].model = 'unknown';
    }

    if (userDatas[l].cost_in_credits === null) {
      userDatas[l].cost_in_credits = 'unknown';
    }

    if (userDatas[l].manufacturer === null) {
      userDatas[l].manufacturer = 'unknown';
    }

    if (userDatas[l].image === null) {
      userDatas[l].image = 'unknown';
    }
  }
}

function getData(url, callbackFunc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callbackFunc(this);
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}

function successAjax(xhttp) {
  // Innen lesz elérhető a JSON file tartalma, tehát az adatok amikkel dolgoznod kell
  var userDatas = JSON.parse(xhttp.responseText);
  // Innen lehet hívni.
  advancedBubbleSortForUserDatasByCostInCredits(userDatas);
  deleteNullConsumabablesObjects(userDatas);
  changeNullValueToUnknown(userDatas);
  console.log(userDatas);
}
getData('/json/spaceships.json', successAjax);
