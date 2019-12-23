# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all
ProjectTicket.destroy_all
ProjectMember.destroy_all
ProjectTicketSolver.destroy_all

u1 = User.create(username:"admin", email:'admin@gmail.com', password:'admin246', role:'admin',firstname:'Steven', lastname:'Nguyen')
u2 = User.create(username:"manager", email:'manager@gmail.com', password:'manager135', role:'manager',firstname:'Kay', lastname:'Smith')
u3 = User.create(username:"developer", email:'dev@gmail.com', password:'devperson', role:'developer',firstname:'Sam', lastname:'Jones')
u4 = User.create(username:"submitter", email:'submitter@gmail.com', password:'submit', role:'N/A',firstname:'Tammy', lastname:'Lee')

p1 = Project.create(user_id:u1.id, title:'Pet Adoption App', desc:'Create an app for an animal shelter.', status:'Completed')
p2 = Project.create(user_id:u2.id, title:'Car Rental App', desc:'Create an app for a car rental company.', status:'In Progress')

pt1 = ProjectTicket.create(user_id:u2.id, project_id:p1.id, title:'Add login', desc:'Make a login and signup for a user with authentications', status:'Completed', priority:'High', type_of_ticket:'Feature Request')

pm1 = ProjectMember.create(project_id: p1.id, user_id:u3.id)

pts1 = ProjectTicketSolver.create(user_id: u3.id, project_ticket_id: pt1.id)