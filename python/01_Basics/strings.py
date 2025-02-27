str1 = "lemon"

slice_str = str1[0: 5]
print(slice_str)
print(str1.replace("le", "Me"))
print(str1.find("on"))

num_string = "0123456789"
slice_num = num_string[:6:2]
print(slice_num)

formater_str = "I am {} Years old"
print(formater_str.format(22))

# list to string
car_variety = ["BMW", "Mercedes", "Audi", "Volvo"]
print(", ".join(car_variety))

#length of string
print(len(str1))

#string iteration
for letter in str1:
    print(letter)

#raw string (rstring)
path = r"c:\user\deskdop"
print(path)