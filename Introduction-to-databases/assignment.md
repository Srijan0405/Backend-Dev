1. db.students.insertOne({
  name: "Srijan Hardik",
  age: 20,
  email: "srijan@gmail.com",
  courses: ["CS101", "MATH201"],
  gpa: 3.6,
  address: {
    city: "Kolkata",
    state: "West Bengal"
  },
  enrollmentDate: new Date()
})
2. db.students.find()
3. db.students.findOne({ email: "srijan@gmail.com" })
4. db.students.updateOne(
  { email: "srijan@gmail.com" },
  { $set: { gpa: 3.9 } }
)
5. db.students.deleteOne({ email: "srijan@gmail.com" })