const ctx: Worker = self as any

ctx.addEventListener("message", (event: MessageEvent) => {
  var chunk: number = event.data.chunk;

  console.log("Starting to add: " + chunk);
  var a = 0;
  for (var i = 0; i < chunk; i++) {
    a++;
  }
});
