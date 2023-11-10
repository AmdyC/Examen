extends Node
func _ready():
   print(sumOdds([1,11,12,15,19]))
func sumOdds(arr):
    var initial
    initial = 0
    for i in range(len(arr)):
        if arr[i]%2 == 1:
            initial += arr[i]
	return initial 
    
