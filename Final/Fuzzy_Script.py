import sys

if len(sys.argv) > 1:
    data = sys.argv[1]
    predictions = [str(x) for x in data.split(',')]
    print("evaluation students",predictions)

# ************************

value_list_for_eval=[]
for i in range(len(predictions)):
    if  predictions[i]=="أحمر":
        value_list_for_eval.append(1)
    elif predictions[i]=="برتقالي":
            value_list_for_eval.append(2)
    elif predictions[i]=="أخضر":
            value_list_for_eval.append(3)
            
# ************************
            
value_for_list_for_eval=round((sum(value_list_for_eval)/(len(value_list_for_eval)*3)),2)*100
value_for_list_for_eval=int(value_for_list_for_eval)
print("team evaluation from model : \n\t" , value_for_list_for_eval)

# ************************

if   value_for_list_for_eval<20:
     print("\tdark red")
elif (value_for_list_for_eval>=20) & (value_for_list_for_eval<40):
     print("\tnormal red")
elif (value_for_list_for_eval>=40) & (value_for_list_for_eval<=49):
     print("\tlight red")
elif (value_for_list_for_eval>=50) & (value_for_list_for_eval<55):
     print("\tlight orange")
elif (value_for_list_for_eval>=55) & (value_for_list_for_eval<65):
     print("\tnormal orange")
elif (value_for_list_for_eval>=65) & (value_for_list_for_eval<70):
     print("\tdark green ")
elif (value_for_list_for_eval>=70) & (value_for_list_for_eval<80):
     print("\tlight green")
elif (value_for_list_for_eval>=80) & (value_for_list_for_eval<90):
     print("\tnormal green")
elif (value_for_list_for_eval>=80) & (value_for_list_for_eval<=100):
     print("\tdark green")
else:
     print("\terror")
        
# ************************

med_eval=sys.argv[2] # evaluation by dr.yasser

med_eval_value=None
if med_eval=="أحمر":
    med_eval_value=35
elif med_eval=="برتقالي":
    med_eval_value=60
elif med_eval=="أخضر":
    med_eval_value=85
else:
    print("error")
    
print("team evaluation from Real : \n\t" , med_eval_value)

weight_for_med_eval_value=1
weight_for_value_for_list_for_eval=2
final_value=round((med_eval_value*weight_for_med_eval_value +value_for_list_for_eval*weight_for_value_for_list_for_eval)/(weight_for_med_eval_value+weight_for_value_for_list_for_eval),1)
print("final team evaluation \n\t" , final_value)

# ************************

if   final_value<20:
     print("\tdark red")
elif (final_value>=20) & (final_value<40):
     print("\tnormal red")
elif (final_value>=40) & (final_value<=49):
     print("\tlight red")
elif (final_value>=50) & (final_value<55):
     print("\tlight orange")
elif (final_value>=55) & (final_value<65):
     print("\tnormal orange")
elif (final_value>=65) & (final_value<70):
     print("\tdark green ")
elif (final_value>=70) & (final_value<80):
     print("\tlight green")
elif (final_value>=80) & (final_value<90):
     print("\tnormal green")
elif (final_value>=80) & (final_value<=100):
     print("\tdark green")
else:
     print("\terror")

# ************************