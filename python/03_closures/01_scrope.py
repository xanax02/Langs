username = "abhay_thakur"

def func():
    username = "abhay"
    print(f"inside func {username}")

def change_global_username():
    global username
    username = "thakur"

print(username)
change_global_username()
print(username)
