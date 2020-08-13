# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

party = Party.create({party: 'lil baby marley'})
party.guests.create({first_name: 'Lil', last_name: 'Harper'})
party.guests.create({first_name: 'Jack', last_name: 'Harper'})
party.guests.create({first_name: 'Marley', last_name: 'Harper'})

party2 = Party.create({party: 'grandma'})
party2.guests.create({first_name: 'Grandma', last_name: 'Salter'})