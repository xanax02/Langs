class Car:
    #constructor
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    #method
    def full_name(self):
        return f"{self.brand} {self.model}"
        

m3 = Car("BMW", "M3")
# print(m3.brand)
# print(m3.model)

print(m3.full_name())