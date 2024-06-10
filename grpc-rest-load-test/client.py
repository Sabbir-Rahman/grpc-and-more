import grpc
import large_array_pb2
import large_array_pb2_grpc

def run():
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = large_array_pb2_grpc.LargeArrayServiceStub(channel)
        response = stub.GetLargeArray(large_array_pb2.Empty())
        for obj in response.objects:
            print(f"ID: {obj.id}, Name: {obj.name}, Value: {obj.value}, Active: {obj.active}, Tags: {obj.tags}")

if __name__ == '__main__':
    run()
