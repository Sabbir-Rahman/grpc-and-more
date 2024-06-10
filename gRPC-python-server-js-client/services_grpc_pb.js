// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// services.proto
'use strict';
const grpc = require("@grpc/grpc-js");
var services_pb = require('./services_pb.js');

function serialize_services_BidiStreamingRequest(arg) {
  if (!(arg instanceof services_pb.BidiStreamingRequest)) {
    throw new Error('Expected argument of type services.BidiStreamingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BidiStreamingRequest(buffer_arg) {
  return services_pb.BidiStreamingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_BidiStreamingResponse(arg) {
  if (!(arg instanceof services_pb.BidiStreamingResponse)) {
    throw new Error('Expected argument of type services.BidiStreamingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BidiStreamingResponse(buffer_arg) {
  return services_pb.BidiStreamingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ClientStreamingRequest(arg) {
  if (!(arg instanceof services_pb.ClientStreamingRequest)) {
    throw new Error('Expected argument of type services.ClientStreamingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ClientStreamingRequest(buffer_arg) {
  return services_pb.ClientStreamingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ClientStreamingResponse(arg) {
  if (!(arg instanceof services_pb.ClientStreamingResponse)) {
    throw new Error('Expected argument of type services.ClientStreamingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ClientStreamingResponse(buffer_arg) {
  return services_pb.ClientStreamingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_RandomObject(arg) {
  if (!(arg instanceof services_pb.RandomObject)) {
    throw new Error('Expected argument of type services.RandomObject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_RandomObject(buffer_arg) {
  return services_pb.RandomObject.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_RandomObjectRequest(arg) {
  if (!(arg instanceof services_pb.RandomObjectRequest)) {
    throw new Error('Expected argument of type services.RandomObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_RandomObjectRequest(buffer_arg) {
  return services_pb.RandomObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ServerStreamingRequest(arg) {
  if (!(arg instanceof services_pb.ServerStreamingRequest)) {
    throw new Error('Expected argument of type services.ServerStreamingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ServerStreamingRequest(buffer_arg) {
  return services_pb.ServerStreamingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ServerStreamingResponse(arg) {
  if (!(arg instanceof services_pb.ServerStreamingResponse)) {
    throw new Error('Expected argument of type services.ServerStreamingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ServerStreamingResponse(buffer_arg) {
  return services_pb.ServerStreamingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UnaryRequest(arg) {
  if (!(arg instanceof services_pb.UnaryRequest)) {
    throw new Error('Expected argument of type services.UnaryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UnaryRequest(buffer_arg) {
  return services_pb.UnaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UnaryResponse(arg) {
  if (!(arg instanceof services_pb.UnaryResponse)) {
    throw new Error('Expected argument of type services.UnaryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UnaryResponse(buffer_arg) {
  return services_pb.UnaryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CombinedServiceService = exports.CombinedServiceService = {
  // Unary
getResponse: {
    path: '/services.CombinedService/GetResponse',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.UnaryRequest,
    responseType: services_pb.UnaryResponse,
    requestSerialize: serialize_services_UnaryRequest,
    requestDeserialize: deserialize_services_UnaryRequest,
    responseSerialize: serialize_services_UnaryResponse,
    responseDeserialize: deserialize_services_UnaryResponse,
  },
  // Client Streaming
sendMessages: {
    path: '/services.CombinedService/SendMessages',
    requestStream: true,
    responseStream: false,
    requestType: services_pb.ClientStreamingRequest,
    responseType: services_pb.ClientStreamingResponse,
    requestSerialize: serialize_services_ClientStreamingRequest,
    requestDeserialize: deserialize_services_ClientStreamingRequest,
    responseSerialize: serialize_services_ClientStreamingResponse,
    responseDeserialize: deserialize_services_ClientStreamingResponse,
  },
  // Server Streaming
getMessages: {
    path: '/services.CombinedService/GetMessages',
    requestStream: false,
    responseStream: true,
    requestType: services_pb.ServerStreamingRequest,
    responseType: services_pb.ServerStreamingResponse,
    requestSerialize: serialize_services_ServerStreamingRequest,
    requestDeserialize: deserialize_services_ServerStreamingRequest,
    responseSerialize: serialize_services_ServerStreamingResponse,
    responseDeserialize: deserialize_services_ServerStreamingResponse,
  },
  // Bidirectional Streaming
chat: {
    path: '/services.CombinedService/Chat',
    requestStream: true,
    responseStream: true,
    requestType: services_pb.BidiStreamingRequest,
    responseType: services_pb.BidiStreamingResponse,
    requestSerialize: serialize_services_BidiStreamingRequest,
    requestDeserialize: deserialize_services_BidiStreamingRequest,
    responseSerialize: serialize_services_BidiStreamingResponse,
    responseDeserialize: deserialize_services_BidiStreamingResponse,
  },
  getRandomObject: {
    path: '/services.CombinedService/GetRandomObject',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.RandomObjectRequest,
    responseType: services_pb.RandomObject,
    requestSerialize: serialize_services_RandomObjectRequest,
    requestDeserialize: deserialize_services_RandomObjectRequest,
    responseSerialize: serialize_services_RandomObject,
    responseDeserialize: deserialize_services_RandomObject,
  },
};

exports.CombinedServiceClient = grpc.makeGenericClientConstructor(CombinedServiceService);
