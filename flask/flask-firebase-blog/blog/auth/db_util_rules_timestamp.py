from datetime import datetime
import time

s = "2022-03-01"
timestamp = round(time.mktime(datetime.strptime(s, '%Y-%m-%d').timetuple()) * 1000)
print(timestamp)
