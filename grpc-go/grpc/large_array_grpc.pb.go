// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.4.0
// - protoc             v5.26.1
// source: large_array.proto

package __

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.62.0 or later.
const _ = grpc.SupportPackageIsVersion8

const (
	LargeArrayService_GetLargeArray_FullMethodName = "/largearray.LargeArrayService/GetLargeArray"
)

// LargeArrayServiceClient is the client API for LargeArrayService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type LargeArrayServiceClient interface {
	GetLargeArray(ctx context.Context, in *Empty, opts ...grpc.CallOption) (*LargeArrayResponse, error)
}

type largeArrayServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewLargeArrayServiceClient(cc grpc.ClientConnInterface) LargeArrayServiceClient {
	return &largeArrayServiceClient{cc}
}

func (c *largeArrayServiceClient) GetLargeArray(ctx context.Context, in *Empty, opts ...grpc.CallOption) (*LargeArrayResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(LargeArrayResponse)
	err := c.cc.Invoke(ctx, LargeArrayService_GetLargeArray_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// LargeArrayServiceServer is the server API for LargeArrayService service.
// All implementations must embed UnimplementedLargeArrayServiceServer
// for forward compatibility
type LargeArrayServiceServer interface {
	GetLargeArray(context.Context, *Empty) (*LargeArrayResponse, error)
	mustEmbedUnimplementedLargeArrayServiceServer()
}

// UnimplementedLargeArrayServiceServer must be embedded to have forward compatible implementations.
type UnimplementedLargeArrayServiceServer struct {
}

func (UnimplementedLargeArrayServiceServer) GetLargeArray(context.Context, *Empty) (*LargeArrayResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetLargeArray not implemented")
}
func (UnimplementedLargeArrayServiceServer) mustEmbedUnimplementedLargeArrayServiceServer() {}

// UnsafeLargeArrayServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to LargeArrayServiceServer will
// result in compilation errors.
type UnsafeLargeArrayServiceServer interface {
	mustEmbedUnimplementedLargeArrayServiceServer()
}

func RegisterLargeArrayServiceServer(s grpc.ServiceRegistrar, srv LargeArrayServiceServer) {
	s.RegisterService(&LargeArrayService_ServiceDesc, srv)
}

func _LargeArrayService_GetLargeArray_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LargeArrayServiceServer).GetLargeArray(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: LargeArrayService_GetLargeArray_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LargeArrayServiceServer).GetLargeArray(ctx, req.(*Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// LargeArrayService_ServiceDesc is the grpc.ServiceDesc for LargeArrayService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var LargeArrayService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "largearray.LargeArrayService",
	HandlerType: (*LargeArrayServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetLargeArray",
			Handler:    _LargeArrayService_GetLargeArray_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "large_array.proto",
}