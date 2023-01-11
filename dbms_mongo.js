//START
sudo service mongod START
start mongod.service
mongod

use sauru
show dbs
db
show databases



db.createCollection("Stud")

db.stud.insert({"rollno":1,"name":"abc","class":"TE"})

db.stud.find().pretty()

db.stud.insert({"rollno":2,"name":"pqr","class":"TE"})

db.stud.insert({"rollno":3,"name":"pqadr","class":"TE"})

db.stud.insert({"rollno":4,"name":"sar","class":"TE"})

db.stud.insert({"empid":4,"ename":"sdf","edpt":"comp","sal":2500000})



db.stud.find().pretty()

db.stud.update({"empid":4},{$set:{"empid":10}})

db.stud.remove({"rollno":2})
