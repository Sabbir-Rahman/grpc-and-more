# server.py
from concurrent import futures
import grpc
import services_pb2
import services_pb2_grpc
import random

class CombinedService(services_pb2_grpc.CombinedServiceServicer):
    # Unary
    def GetResponse(self, request, context):
        reply_message = f"Received: {request.message}"
        return services_pb2.UnaryResponse(reply=reply_message)

    # Client Streaming
    def SendMessages(self, request_iterator, context):
        messages = []
        for request in request_iterator:
            messages.append(request.message)
        reply_message = f"Received {len(messages)} messages"
        return services_pb2.ClientStreamingResponse(reply=reply_message)

    # Server Streaming
    def GetMessages(self, request, context):
        for i in range(5):
            yield services_pb2.ServerStreamingResponse(reply=f"Reply {i+1} to {request.message}")

    # Bidirectional Streaming
    def Chat(self, request_iterator, context):
        for request in request_iterator:
            yield services_pb2.BidiStreamingResponse(reply=f"Reply to {request.message}")

    def GetRandomObject(self, request, context):
        outer_object_count = request.outerObjectCount
        inner_object_count = request.innerObjectCount

        random_object = services_pb2.RandomObject()
        for i in range(outer_object_count):
            nested_object = services_pb2.NestedObject()
            properties = nested_object.objects
            for j in range(inner_object_count):
                properties[f'object{j}'] = random.randint(0, 999)
            random_object.properties[f'property{i}'].CopyFrom(nested_object)

        return random_object

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    services_pb2_grpc.add_CombinedServiceServicer_to_server(CombinedService(), server)
    server.add_insecure_port('[::]:50050')
    server.start()
    server.wait_for_termination()

if __name__ == '__main__':
    serve()

# python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. services.proto