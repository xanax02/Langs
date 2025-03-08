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


tesla = ElectricCar("Tesla", "Model S", "99kWh")
print(tesla.full_name())