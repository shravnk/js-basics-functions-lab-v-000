// Code your solution in this file!

function distanceFromHqInBlocks(street){
  return Math.abs(42 - street)
}

function distanceFromHqInFeet(street) {
  return Math.abs((42 - street)*264)
}

function distanceTravelledInFeet(start, end) {
  return Math.abs((start - end)*264)
}

function calculatesFarePrice(start, end) {
  const length = Math.abs(start - end)
  switch (length) {
    case (< 400) :
      return 0
    case (>= 400 && <= 2000):
      return length*.02
    case (> 2000 && <= 2500):
      return 25
    default:
      'cannot travel that far'
  }
}
