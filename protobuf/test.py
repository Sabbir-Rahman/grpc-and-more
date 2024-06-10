import user_pb2
import json

user = user_pb2.User()
user.name = "Sabbir"
user.age = 24
user.height = 180
pet1 = user.pets.add()
pet1.name = "Cat"
pet1.sound = "Meow"

# Attribute error
# user.friend = "John"

# Type error
# user.age = "twenty four"

protoString = user.SerializeToString()


# parsedUserFromStr = user_pb2.User()
# parsedUserFromStr.ParseFromString(protoString)

# print(protoString)

# print(parsedUserFromStr)

user_json = {
    "name": "Sabbir",
    "age": 24,
    "height": 180,
    "pets": [
        {
            "name": "Cat",
            "sound": "Meow"
        }
    ]
}

# Serialize the JSON object to a string
json_string = json.dumps(user_json)

# Compare the sizes
proto_size = len(protoString)
json_size = len(json_string)

print("Protobuf size:", proto_size)
print("JSON size:", json_size)



jsonstr = {
	"name": "Sabbir",
	"age": 24
}

