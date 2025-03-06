def sum_all(*args):
    for i in args:
        print(i*2)
    return sum(args)

# print(sum_all(1,2,3,4,5,6))
print(sum_all(6,9))