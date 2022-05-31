# Simple robot move simulation

## How it works:

* The robot factory manufactures robots that have three possible movements:
turn right
turn left
advance

* Robots are placed on a hypothetical infinite grid, facing a particular
  direction (north, east, south, or west) at a set of {x,y} coordinates,
  e.g., {3,8}.

* Robots can pivot left and right.

* The factory's test facility verifies robot movements.

* The floor of the room is a grid, each square of which measures 1 square
  RU (Robot Unit).

* The rooms are always oriented so that each wall faces east, south, west,
  and north.

* The test algorithm is to place a robot at a coordinate in the room,
 facing in a particular direction.

* The robot then receives a number of instructions, at which point the
 testing facility verifies the robot's new position, and in which
 direction it is pointing.

* The robot factory's test facility has a simulator which can take a
string of letters and feed this into a robot as instructions.

* The letter-string "RAALAL" means:
  Turn right
  Advance twice
  Turn left
  Advance once
  Turn left yet again
  Say a robot starts at {7, 3} facing north. Then running this stream of instructions should leave it at {9, 2} facing west.


so the function takes a string of instructions as parameters and return string with the following format:
```
"{x: X, y: Y, bearing: 'DIRECTION'}"
```

X and Y with last coordinates of the robot.
DIRECTION will be the orientation (north, west, south, east)

## Note 
[I'm using Computer Graphics Coordinate System](https://fcs-cs.github.io/cs1-2018/modules/01-introduction/computer-coordinates/)
![Computer-coordinates](https://storage.googleapis.com/qwasar-public/track-rust/computer_coordinates.png?raw=true "Computer-coordinates-image")

Robot always starts in 0, 0 facing north.

Going south will increase Y.
Going west will decrease X.

The grid is unlimited, positions can be negative.

Example

```
Input: "RAALALL"
Return Value: "{x: 2, y: -1, bearing: 'south'}"
```
