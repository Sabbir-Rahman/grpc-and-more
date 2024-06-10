package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"google.golang.org/grpc"
	pb "Users/sabbir/Documents/grpc-go/grpc"

	
)

func main() {
	conn, err := grpc.Dial("localhost:50053", grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()

	client := pb.NewRandomObjectServiceClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	req := &pb.RandomObjectRequest{
		OuterObjectCount: 2,
		InnerObjectCount: 3,
	}

	res, err := client.GetRandomObject(ctx, req)
	if err != nil {
		log.Fatalf("could not get random object: %v", err)
	}

	fmt.Println("Random Object Response:")
	for outerKey, innerObj := range res.RandomObject {
		fmt.Printf("%s:\n", outerKey)
		for innerKey, value := range innerObj.Objects {
			fmt.Printf("  %s: %d\n", innerKey, value)
		}
	}
}
