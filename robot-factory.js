function robot_simulator(instructions) {
  var obj = {x: 0, y: 0, bearing: 'north'}
  for(var i=0; i< instructions.length; i++){
      if(instructions[i] == 'A') {
          move(obj);
      }
      if(instructions[i] == 'L') {
          obj.bearing = turnLeft(obj.bearing);
      }
       if(instructions[i] == 'R') {
          obj.bearing = turnRight(obj.bearing);
      }
      
  }

  return "{x: " + obj.x + ", y: "+ obj.y + ", bearing: '" + obj.bearing + "'}";
}

function turnLeft(direction) {
  var orientation = '';
  switch (direction) {
      case 'north':
      orientation = 'west';
      break;
      case 'east':
      orientation = 'north';
      break;
      case 'south':
      orientation = 'east';
      break;
      case 'west':
      orientation = 'south';
      break;
  }
  return orientation;
}

function turnRight(direction) {
  var orientation = '';
  switch (direction) {
      case 'north':
          orientation = 'east';
      break;
      case 'east':
          orientation = 'south';
      break;
      case 'south':
          orientation = 'west';
      break;
      case 'west':
          orientation = 'north';
      break;
  }
  return orientation;
}

function move(obj) {
  switch(obj.bearing) {
      case 'north':
          obj.y--;
      break;
      case 'west':
          obj.x--;
      break;
       case 'south':
          obj.y++;
      break;
       case 'east':
          obj.x++;
      break;
  }

  return obj;
}
