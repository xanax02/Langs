class Car:
    total_car = 0


    def __init__(self, brand, model):
        self.__brand = brand
        self.__model = model
        Car.total_car+=1


    def get_brand(self):
        return self.__brand + "! "
 

    def full_name(self):
        return f"{self.__brand} {self.__model}"
    

    def fuel_type(self):
        return "Petrol or Diesel"
    

    @staticmethod
    def general_description():
        return "Cars are the best"
    

    #property decorator 
    #__ will make model inaccessible but it should be readonly
    @property #this will convert model() method to model property
    def model(self):
        return self.__model
    

class ElectricCar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(brand, model)
        self.battery_size = battery_size

    
    def fuel_type(self):
        return "Electric Change"


tesla = ElectricCar("Tesla", "Model S", "99kWh")
m3 = Car("BMW", "M3")

print(m3.model)