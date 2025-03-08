class Car:
    def __init__(self, brand, model):
        self.__brand = brand
        self.model = model

    #getter method
    def get_brand(self):
        return self.__brand + "! "

    #method
    def full_name(self):
        return f"{self.__brand} {self.model}"
    

class ElectricCar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(brand, model)
        self.battery_size = battery_size


tesla = ElectricCar("Tesla", "Model S", "99kWh")
print(tesla.get_brand())