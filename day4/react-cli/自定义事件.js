class EventEmitter {}
const myEvent = new EventEmitter();

myEvent.on("aaa", function () {
  console.log(111);
});
myEvent.cb("aaa", function () {
  console.log(222);
});
myEvent.on("aaa", cb);

myEvent.once("aaa", function () {
  console.log("3333");
});

myEvent.emit("aaa");
myEvent.off("aaa", cb);
