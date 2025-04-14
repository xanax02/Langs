#parent class
class Car:
    #constructor
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    #method
    def full_name(self):
        return f"{self.brand} {self.model}"


#inherited in ()
class ElectricCar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(brand, model) #passed the parameters in parent class constructor
        self.battery_size = battery_size

## multiple inheritance
class Battery:
    def battery_info(self):
        return "this is from battery class"


class Engine:
    def engine_info(self):
        return "this is from engine class"


class ElectricCarMultipleInt(Battery, Engine, Car):
    pass


tesla = ElectricCar("Tesla", "Model S", "99kWh")
print(tesla.full_name())

multi_int_tesla = ElectricCarMultipleInt("Tesla", "ModelS")
print(f"multiple inhertance for {multi_int_tesla.full_name()} and props from {multi_int_tesla.battery_info()}, {multi_int_tesla.engine_info()} and {multi_int_tesla.battery_info}")