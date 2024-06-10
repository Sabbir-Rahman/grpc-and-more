import grpc
from concurrent import futures
import large_array_pb2
import large_array_pb2_grpc
import json

# Load the large array from the JSON file
with open('large_array.json', 'r') as file:
    large_array = json.load(file)

class LargeArrayService(large_array_pb2_grpc.LargeArrayServiceServicer):
    def GetLargeArray(self, request, context):
        response = large_array_pb2.LargeArrayResponse()
        for obj in large_array:
            large_object = large_array_pb2.LargeObject(
                id=obj['id'],
                name=obj['name'],
                value=obj['value'],
                active=obj['active'],
                tags=obj['tags']
            )
            response.objects.append(large_object)
        return response

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    large_array_pb2_grpc.add_LargeArrayServiceServicer_to_server(LargeArrayService(), server)
    server.add_insecure_port('[::]:50053')
    server.start()
    print("Server is running on port 50053...")
    server.wait_for_termination()

if __name__ == '__main__':
    serve()
