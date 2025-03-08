class Car:
    def __init__(self, brand, model):
        self.__brand = brand
        self.model = model


    def get_brand(self):
        return self.__brand + "! "
 

    def full_name(self):
        return f"{self.__brand} {self.model}"
    

    def fuel_type(self):
        return "Petrol or Diesel"
    

class ElectricCar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(brand, model)
        self.battery_size = battery_size

    
    def fuel_type(self):
        return "Electric Change"


tesla = ElectricCar("Tesla", "Model S", "99kWh")
print(f"fuel type of {tesla.get_brand()} {tesla.model} is {tesla.fuel_type()}")

m3 = Car("BMW", "M3")
print(f"Fuel type of {m3.get_brand()} {m3.model} is {m3.fuel_type()}")