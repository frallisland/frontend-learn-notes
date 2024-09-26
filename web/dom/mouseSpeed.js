// 监听鼠标移动速度
let previousX, previousY, previousT;
window.addEventListener("mousemove", function (event) {
  if (
    previousX !== undefined &&
    previousY !== undefined &&
    previousT !== undefined
  ) {
    var deltaX = event.screenX - previousX;
    var deltaY = event.screenY - previousY;
    var deltaD = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    var deltaT = event.timeStamp - previousT;
    console.log((deltaD / deltaT) * 1000);
  }

  previousX = event.screenX;
  previousY = event.screenY;
  previousT = event.timeStamp;
});
