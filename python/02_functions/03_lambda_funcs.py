#lambda functions

cube = lambda x: x**3

print(cube(3))
print(cube(4))

#higher order functions
nums = [1,2,3,4,5,6,7,8,9]

#map -> doubling element
mapped_nums = list(map(lambda x: x*2, nums))
print(f"mapped list: {mapped_nums}")

#filter -> even elements
filtered_nums = list(filter(lambda x: x%2 == 0, nums))
print(f"filtered_nums: {filtered_nums}")