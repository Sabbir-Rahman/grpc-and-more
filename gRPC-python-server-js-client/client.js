const grpc = require("@grpc/grpc-js");
const messages = require("./services_pb");
const services = require("./services_grpc_pb");

// Create a client instance
const client = new services.CombinedServiceClient(
  "localhost:50050",
  grpc.credentials.createInsecure()
);

// Unary
function unaryRequest() {
  const request = new messages.UnaryRequest();
  request.setMessage("Hello, Unary!");
  client.getResponse(request, (error, response) => {
    if (!error) {
      console.log("Unary Response:", response.getReply());
    } else {
      console.error(error);
    }
  });
}

// Client Streaming
function clientStreamingRequest() {
  const call = client.sendMessages((error, response) => {
    if (!error) {
      console.log("Client Streaming Response:", response.getReply());
    } else {
      console.error(error);
    }
  });

  const request1 = new messages.ClientStreamingRequest();
  request1.setMessage("Message 1");
  call.write(request1);

  const request2 = new messages.ClientStreamingRequest();
  request2.setMessage("Message 2");
  call.write(request2);

  const request3 = new messages.ClientStreamingRequest();
  request3.setMessage("Message 3");
  call.write(request3);

  call.end();
}

// Server Streaming
function serverStreamingRequest() {
  const request = new messages.ServerStreamingRequest();
  request.setMessage("Hello, Server Streaming!");
  const call = client.getMessages(request);

  call.on("data", (response) => {
    console.log("Server Streaming Response:", response.getReply());
  });

  call.on("end", () => {
    console.log("Server streaming completed.");
  });

  call.on("error", (error) => {
    console.error(error);
  });
}

// Bidirectional Streaming
function bidiStreamingRequest() {
  const call = client.chat();

  call.on("data", (response) => {
    console.log("Bidirectional Streaming Response:", response.getReply());
  });

  call.on("end", () => {
    console.log("Bidirectional streaming completed.");
  });

  call.on("error", (error) => {
    console.error(error);
  });

  const request1 = new messages.BidiStreamingRequest();
  request1.setMessage("Message 1");
  call.write(request1);

  const request2 = new messages.BidiStreamingRequest();
  request2.setMessage("Message 2");
  call.write(request2);

  const request3 = new messages.BidiStreamingRequest();
  request3.setMessage("Message 3");
  call.write(request3);

  call.end();
}

function getRandomObject(outerObjectCount, innerObjectCount) {
  const request = new messages.RandomObjectRequest();
  request.setOuterobjectcount(outerObjectCount);
  request.setInnerobjectcount(innerObjectCount);

  client.getRandomObject(request, (error, response) => {
    if (!error) {
      console.log("Random Object:", response.toObject());
    } else {
      console.error(error);
    }
  });
}

// Run all requests
unaryRequest();
clientStreamingRequest();
serverStreamingRequest();
bidiStreamingRequest();
getRandomObject(10, 5);

// grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --grpc_out=. --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` services.proto
