package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"Users/sabbir/Documents/grpc-go/grpc/largearray"

	"google.golang.org/grpc"
	pb "Users/sabbir/Documents/grpc-go/grpc"

)

// Load the large array from the JSON file
var largeArray []largearray.LargeObject

func init() {
	data, err := ioutil.ReadFile("large_array.json")
	if err != nil {
		log.Fatalf("Failed to read JSON file: %v", err)
	}

	err = json.Unmarshal(data, &largeArray)
	if err != nil {
		log.Fatalf("Failed to unmarshal JSON: %v", err)
	}
}

type server struct {
	largearray.UnimplementedLargeArrayServiceServer
}

func (s *server) GetLargeArray(ctx context.Context, in *emptypb.Empty) (*largearray.LargeArrayResponse, error) {
	response := &largearray.LargeArrayResponse{}
	response.Objects = largeArray
	return response, nil
}

func main() {
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	s := grpc.NewServer()
	largearray.RegisterLargeArrayServiceServer(s, &server{})

	fmt.Println("Server is running on port 50051...")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}