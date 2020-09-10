# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

party2 = Party.create({party: 'test-guest'})

party2.guests.create({first_name: 'Mike', last_name: 'Jones'})
party2.guests.create({first_name: 'Tina', last_name: 'Turner'})