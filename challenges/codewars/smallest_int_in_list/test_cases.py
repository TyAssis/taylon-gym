# for backward compatibility
try:
    find_smallest_int = findSmallestInt
except NameError:
    pass

Test.describe("Fixed Tests")

test.assert_equals(find_smallest_int([78, 56, 232, 12, 11, 43]), 11)
test.assert_equals(find_smallest_int([78, 56, -2, 12, 8, -33]), -33)
test.assert_equals(find_smallest_int([0, 1-2**64, 2**64]), 1-2**64)
test.assert_equals(find_smallest_int([-133,-5666,-89,-12341,-321423, 2**64]), -321423)
test.assert_equals(find_smallest_int([0, 2**64, -1-2**64, 2**64, 2**64]), -1-2**64)
test.assert_equals(find_smallest_int([1,2,3,4,5,6,7,8,9,10]), 1)
test.assert_equals(find_smallest_int([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), -10)
test.assert_equals(find_smallest_int([-78,56,232,12,8]), -78)
test.assert_equals(find_smallest_int([78,56,-2,12,-8]), -8)


Test.describe("Random Tests")
from random import randint

for _ in range(100):
    arr = [ randint(-1000, 1000) for _ in range(randint(1, 30)) ]
    #print(arr)
    expected = min(arr)
    test.assert_equals(find_smallest_int(arr), expected)
