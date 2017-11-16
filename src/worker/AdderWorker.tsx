const ctx: Worker = self as any

const biteSize = 5000000;
ctx.addEventListener("message", (event: MessageEvent) => {
  console.log("Starting up worker");
  var a = 0;
  while(true) {
    for (var i = 0; i < biteSize; i++) {
      a++;
    }

    ctx.postMessage("success");
  }
});
