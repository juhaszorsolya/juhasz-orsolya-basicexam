// ide deklaráljátok a függvényeket.
// 1. feladat
function advancedBubbleSortForUserDatasByCostInCredits(userDatas) {
  var i = userDatas.length - 1;
  while ( i > 0 ) {
    var csere = 0;
    for ( var j = 0; j < i; j++) {
      if (parseInt(userDatas[j].cost_in_credits, 10) > parseInt(userDatas[j + 1].cost_in_credits, 10)) {
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
  for ( var i = 0; i < userDatas.length; i++) {
    if (userDatas[i].consumables === null) {
      userDatas.splice(i, 1);
    }
  }
  return userDatas;
}

// 3.feladat
function changeNullValueToUnknown(userDatas) {
  for (var i = 0; i < userDatas.length; i++) {
    if (userDatas[i].id === null) {
      userDatas[i].id = 'unknown';
    }
    if (userDatas[i].denomination === null) {
      userDatas[i].denomination = 'unknown';
    }

    if (userDatas[i].cargo_capacity === null) {
      userDatas[i].cargo_capacity = 'unknown';
    }

    if (userDatas[i].passengers === null) {
      userDatas[i].passengers = 'unknown';
    }

    if (userDatas[i].max_atmosphering_speed === null) {
      userDatas[i].max_atmosphering_speed = 'unknown';
    }

    if (userDatas[i].crew === null) {
      userDatas[i].crew = 'unknown';
    }

    if (userDatas[i].lengthiness === null) {
      userDatas[i].lengthiness = 'unknown';
    }

    if (userDatas[i].model === null) {
      userDatas[i].model = 'unknown';
    }

    if (userDatas[i].cost_in_credits === null) {
      userDatas[i].cost_in_credits = 'unknown';
    }

    if (userDatas[i].manufacturer === null) {
      userDatas[i].manufacturer = 'unknown';
    }

    if (userDatas[i].image === null) {
      userDatas[i].image = 'unknown';
    }
  }
  return userDatas;
}

// 5.feladat
function sumOnePersonCrewShips(userDatas) {
  var sumShips = 0;
  for (var i = 0; i < userDatas.length; i++) {
    if (parseInt(userDatas[i].crew, 10) === 1) {
      sumShips++;
    }
  }
  return sumShips;
}

function maxCargoCapacityShip(userDatas) {
  var maxCapacityShip = userDatas[0];
  for (var i = 1; i < userDatas.length; i++) {
    if (parseInt(userDatas[i].cargo_capacity, 10) > parseInt(maxCapacityShip.cargo_capacity, 10)) {
      maxCapacityShip = userDatas[i];
    }
  }
  return maxCapacityShip.model;
}

function sumAllPassengers(userDatas) {
  var sumPassengers = 0;
  for (var i = 0; i < userDatas.length; i++) {
    sumPassengers += parseInt(userDatas[i].passengers, 10);
  }
  return sumPassengers;
}

function longestShipImageName(userDatas) {
  var longestShip = userDatas[0];
  for (var i = 1; i < userDatas.length; i++) {
    if (parseInt(userDatas[i].lengthiness, 0) > parseInt(longestShip.lengthiness, 0)) {
      longestShip = userDatas[i];
    }
  }
  return longestShip.model;
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

  console.log(sumOnePersonCrewShips(userDatas));
  console.log(maxCargoCapacityShip(userDatas));
  console.log(sumAllPassengers(userDatas));
  console.log(longestShipImageName(userDatas));
}
getData('/json/spaceships.json', successAjax);
