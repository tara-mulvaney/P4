# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

blog_1 = Blog.create(
  title: "Blog 1",
  topic: "Stuff",
  content: "Going on about stuff."
)

blog_2 = Blog.create(
  title: "Blog 2",
  topic: "Things",
  content: "Going on about things."
)

blog_3 = Blog.create(
  title: "Blog 3",
  topic: "The end",
  content: "No more blogs."
)
