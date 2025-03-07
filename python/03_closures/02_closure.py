username = "abhay_thakur"

def f1():
    username = "abhay"
    
    def f2():
        print(username)
    
    return f2

result = f1()
# print(result)
result()


# factory functions of closure
def outer_func(num):
    def inner_func(x):
        return x ** num
    return inner_func

f = outer_func(2) #this will set the num which will be the power
                  # f also have inner_function definition
result = f(3)
print(result)
