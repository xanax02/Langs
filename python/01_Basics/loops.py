#factorial
# number = int(input("Enter num"))
number = 6
fact = 1
while number > 0:
    fact*= number
    number-=1

print(fact)


number_to_check = 66
is_prime =  True

if number_to_check > 1:
    for i in range(2, number_to_check):
        if(number_to_check % i == 0):
            is_prime = False

print(f"is prime ? : {is_prime}")