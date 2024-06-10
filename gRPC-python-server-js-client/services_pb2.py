# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: services.proto
# Protobuf Python Version: 5.26.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0eservices.proto\x12\x08services\"I\n\x13RandomObjectRequest\x12\x18\n\x10outerObjectCount\x18\x01 \x01(\x05\x12\x18\n\x10innerObjectCount\x18\x02 \x01(\x05\"\x95\x01\n\x0cRandomObject\x12:\n\nproperties\x18\x01 \x03(\x0b\x32&.services.RandomObject.PropertiesEntry\x1aI\n\x0fPropertiesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12%\n\x05value\x18\x02 \x01(\x0b\x32\x16.services.NestedObject:\x02\x38\x01\"t\n\x0cNestedObject\x12\x34\n\x07objects\x18\x01 \x03(\x0b\x32#.services.NestedObject.ObjectsEntry\x1a.\n\x0cObjectsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x05:\x02\x38\x01\"\x1f\n\x0cUnaryRequest\x12\x0f\n\x07message\x18\x01 \x01(\t\"\x1e\n\rUnaryResponse\x12\r\n\x05reply\x18\x01 \x01(\t\")\n\x16\x43lientStreamingRequest\x12\x0f\n\x07message\x18\x01 \x01(\t\"(\n\x17\x43lientStreamingResponse\x12\r\n\x05reply\x18\x01 \x01(\t\")\n\x16ServerStreamingRequest\x12\x0f\n\x07message\x18\x01 \x01(\t\"(\n\x17ServerStreamingResponse\x12\r\n\x05reply\x18\x01 \x01(\t\"\'\n\x14\x42idiStreamingRequest\x12\x0f\n\x07message\x18\x01 \x01(\t\"&\n\x15\x42idiStreamingResponse\x12\r\n\x05reply\x18\x01 \x01(\t2\x95\x03\n\x0f\x43ombinedService\x12>\n\x0bGetResponse\x12\x16.services.UnaryRequest\x1a\x17.services.UnaryResponse\x12U\n\x0cSendMessages\x12 .services.ClientStreamingRequest\x1a!.services.ClientStreamingResponse(\x01\x12T\n\x0bGetMessages\x12 .services.ServerStreamingRequest\x1a!.services.ServerStreamingResponse0\x01\x12K\n\x04\x43hat\x12\x1e.services.BidiStreamingRequest\x1a\x1f.services.BidiStreamingResponse(\x01\x30\x01\x12H\n\x0fGetRandomObject\x12\x1d.services.RandomObjectRequest\x1a\x16.services.RandomObjectb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'services_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  DESCRIPTOR._loaded_options = None
  _globals['_RANDOMOBJECT_PROPERTIESENTRY']._loaded_options = None
  _globals['_RANDOMOBJECT_PROPERTIESENTRY']._serialized_options = b'8\001'
  _globals['_NESTEDOBJECT_OBJECTSENTRY']._loaded_options = None
  _globals['_NESTEDOBJECT_OBJECTSENTRY']._serialized_options = b'8\001'
  _globals['_RANDOMOBJECTREQUEST']._serialized_start=28
  _globals['_RANDOMOBJECTREQUEST']._serialized_end=101
  _globals['_RANDOMOBJECT']._serialized_start=104
  _globals['_RANDOMOBJECT']._serialized_end=253
  _globals['_RANDOMOBJECT_PROPERTIESENTRY']._serialized_start=180
  _globals['_RANDOMOBJECT_PROPERTIESENTRY']._serialized_end=253
  _globals['_NESTEDOBJECT']._serialized_start=255
  _globals['_NESTEDOBJECT']._serialized_end=371
  _globals['_NESTEDOBJECT_OBJECTSENTRY']._serialized_start=325
  _globals['_NESTEDOBJECT_OBJECTSENTRY']._serialized_end=371
  _globals['_UNARYREQUEST']._serialized_start=373
  _globals['_UNARYREQUEST']._serialized_end=404
  _globals['_UNARYRESPONSE']._serialized_start=406
  _globals['_UNARYRESPONSE']._serialized_end=436
  _globals['_CLIENTSTREAMINGREQUEST']._serialized_start=438
  _globals['_CLIENTSTREAMINGREQUEST']._serialized_end=479
  _globals['_CLIENTSTREAMINGRESPONSE']._serialized_start=481
  _globals['_CLIENTSTREAMINGRESPONSE']._serialized_end=521
  _globals['_SERVERSTREAMINGREQUEST']._serialized_start=523
  _globals['_SERVERSTREAMINGREQUEST']._serialized_end=564
  _globals['_SERVERSTREAMINGRESPONSE']._serialized_start=566
  _globals['_SERVERSTREAMINGRESPONSE']._serialized_end=606
  _globals['_BIDISTREAMINGREQUEST']._serialized_start=608
  _globals['_BIDISTREAMINGREQUEST']._serialized_end=647
  _globals['_BIDISTREAMINGRESPONSE']._serialized_start=649
  _globals['_BIDISTREAMINGRESPONSE']._serialized_end=687
  _globals['_COMBINEDSERVICE']._serialized_start=690
  _globals['_COMBINEDSERVICE']._serialized_end=1095
# @@protoc_insertion_point(module_scope)
