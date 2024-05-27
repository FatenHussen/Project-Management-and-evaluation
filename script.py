import sys
from joblib import load
import pandas as pd

filename = 'C:/Users/jawad/Documents/projects/Octopus/Proposal/new_model.joblib'
loaded_model = load(filename)

feature_names = ['اختبار', 'برمجة', 'تصميم', 'عرض', 'تقرير', 'غيتهاب', 'مرجعية', 'تحليل',  'نتائج']

if len(sys.argv) > 1:
    data = sys.argv[1]
    data_list = [[int(x) for x in data.split(',')]]
    df = pd.DataFrame(data_list, columns=feature_names)
    predictions = loaded_model.predict(df).tolist()
    print(*predictions, sep=', ')