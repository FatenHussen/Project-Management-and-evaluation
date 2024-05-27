import sys

if len(sys.argv) > 2:
     data = sys.argv[1]
     predictions = [str(x) for x in data.split(',')]

     value_list_for_eval=[]
     for i in range(len(predictions)):
          if  predictions[i]=="أحمر":
               value_list_for_eval.append(1)
          elif predictions[i]=="برتقالي":
               value_list_for_eval.append(2)
          elif predictions[i]=="أخضر":
               value_list_for_eval.append(3)
                    
     value_for_list_for_eval=round((sum(value_list_for_eval)/(len(value_list_for_eval)*3)),2)*100
     value_for_list_for_eval=int(value_for_list_for_eval)

     med_eval=sys.argv[2] # evaluation by dr.yasser
     med_eval_value=None
     if (med_eval=="أحمر") or (med_eval=="احمر"):
          med_eval_value=35
     elif med_eval=="برتقالي":
          med_eval_value=60
     elif (med_eval=="أخضر") or (med_eval=="اخضر"):
          med_eval_value=85
     else:
          print("Error: Invalid value for med_eval")

     weight_for_med_eval_value=1
     weight_for_value_for_list_for_eval=2
     final_value=round((med_eval_value*weight_for_med_eval_value +value_for_list_for_eval*weight_for_value_for_list_for_eval)/(weight_for_med_eval_value+weight_for_value_for_list_for_eval),1)

     if   final_value<20:
          print("dark red")
     elif (final_value>=20) & (final_value<40):
          print("normal red")
     elif (final_value>=40) & (final_value<=49):
          print("light red")
     elif (final_value>=50) & (final_value<55):
          print("light orange")
     elif (final_value>=55) & (final_value<65):
          print("normal orange")
     elif (final_value>=65) & (final_value<70):
          print("dark orange")
     elif (final_value>=70) & (final_value<80):
          print("light green")
     elif (final_value>=80) & (final_value<90):
          print("normal green")
     elif (final_value>=90) & (final_value<=100):
          print("dark green")
     else:
          print("error")