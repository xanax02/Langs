cars=["BMW", "Merc", "Vol", "Audi"]

# sclicing
print(cars[:3])

cars[1:3] = ["Mercedes", "Volvo"]
print(cars)

cars[1:1] = ["Porshe", "Lambo"]
print(cars)

#insert nothing = delete
cars[1:3] = []
print("deleltion")
print(cars)


#iterator
for car in cars:
    print(car, end=" ")
print()

#conditional
if "BMW" in cars:
    print("This is my fav")

#appeding
cars.append("Porshe")
print(cars)

#deleting with pop
cars.pop()
print(cars)

#removing particular item
cars.remove("BMW")
print(cars)

#inserting
cars.insert(0, "BMW")
print(cars)

#coping 
cars2 = cars.copy()
print(f"cars2 is {cars2}")

#list comprehension
sq_nums = [x**2 for x in range(10)]
print(f"sq_nums {sq_nums}")