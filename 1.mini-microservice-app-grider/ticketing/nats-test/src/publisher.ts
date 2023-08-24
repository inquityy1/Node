import nats from "node-nats-streaming";

const stan /**<- client */ = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Publisher connected to NATS");
});
