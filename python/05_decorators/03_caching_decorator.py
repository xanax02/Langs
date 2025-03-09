import time


def cache(func):
    cache_value = {}
    print(f"cache outer: {cache_value}")
    def wrapper(*args):
        print(f"printing args, {args}")
        if(args in cache_value):
            return cache_value[args]
        result = func(*args)
        cache_value[args] = result
        return result

    return wrapper

@cache
def long_running_function(a,b):
    time.sleep(4)
    return a+b


print(f"function call result: {long_running_function(3,5)}")
print()
print(f"2nd function call result: {long_running_function(3,5)}")
