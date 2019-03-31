def find_smallest_int(arr):
    # Code here
    min = arr[0]
    for num in arr:
        if min > num:
            min = num
    return min
