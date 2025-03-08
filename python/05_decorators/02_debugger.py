def debug(func):
    def wrapper(*args, **kwargs):
        args_values = ', '.join(str(arg) for arg in args)
        kwargs_values = ', '.join(f"{k}: {v}" for k, v in kwargs.items())

        print(f"calling: {func.__name__} with args {args_values} and kwargs {kwargs_values}")
        return func(*args, **kwargs)

    return wrapper

@debug
def greet(name, greeting="hello"):
    print(f"{greeting}, {name}")


greet(name="Abhay", greeting="HI!!!!!")