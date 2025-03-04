#tuples are immutable
cars = ("BMW", "MERCEDES", "AUDI", "VOLVO")
print(cars)

#concat
more_cars = ("Porshe", "Lamborghini")
all_cars = cars+ more_cars
print("concat", all_cars)

#tuple unpacking
(c1, c2, c3, c4) = cars
print("unpacked", c1)