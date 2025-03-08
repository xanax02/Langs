#function execution time mesuring decorator

import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end-start} time")
        return result
    return wrapper


@timer
def decorator_user(n):
    time.sleep(n)


decorator_user(3)