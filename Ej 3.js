extends Node
func _ready():
   print(sumOdds([2,4,1,0]))
func sumOdds(arr):
    var initial
    for i in range(len(arr)):
		initial=((arr[i]*2)-1)**2
		arr.append(arr[i])
	return initial 
    