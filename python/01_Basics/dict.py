my_dict={"f_name": "abhay", "l_name": "thakur", "age": 23}

#accessing values
f_name = my_dict.get("f_name")
print(f_name)

#changing values
my_dict["age"] = 22
print(my_dict)

#iterating
for key in my_dict:
    print(my_dict[key])

for key, value in my_dict.items():
    print(f"{key} {value}")

#length
print(f"length of my_dict is {len(my_dict)}")

#appeding 
my_dict["is_employed"] = True
print(f"appeding {my_dict}")

#removing
##to remove from last
my_dict.popitem()
print(f"removing last element {my_dict}")

##with pop
my_dict.pop("age")
print(f"age removed with pop {my_dict}")

## with delete
del my_dict["l_name"]
print(f"l_name deleted with del {my_dict}")

print("####################")
print()
print()

############################# nested ###############
nested_dict = {
    "f_name": "abhay",
    "l_name": "thakur",
    "info": {
        "address": "pune",
        "phone": "0123456789"
    }
}

#accessing items
print(nested_dict["info"]["address"])

#dictionary comprehension
dict_comp = {x:x**2 for x in range(10)}
print(f"dict_comp {dict_comp}")

# dict.fromkeys
keys = ["car1", "car2", "car3"]
default_value = "BMW M3"

dict_form_keys = dict.fromkeys(keys, default_value)
print(f"dict.fromkeys method {dict_form_keys}")