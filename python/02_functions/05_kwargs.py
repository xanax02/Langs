#keyword arguments

# def print_kwargs(name, brand):
#     print("Name: ", name, " Brand: ", brand)


def print_kwargs(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")


print_kwargs(brand="BMW", name="M3")