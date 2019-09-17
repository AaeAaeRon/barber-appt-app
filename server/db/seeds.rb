# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Client.destroy_all
Professional.destroy_all
Service.destroy_all
Appointment.destroy_all


c1 = Client.create(first_name: 'Aaron', last_name: 'Briscoe', mobile_num: '281-217-2419', email: 'abriscoe2008@gmail.com', password: 'password')
c2 = Client.create(first_name: 'Betsy', last_name: 'Hank', mobile_num: '713-235-8392', email: 'betsy@yahoo.com', password: 'password')

p1 = Professional.create(first_name: 'James', last_name: 'Smith', mobile_num: '713-123-2684', email: 'js@gmail.com', password: 'password')
p2 = Professional.create(first_name: 'Blake', last_name: 'Randall', mobile_num: '832-934-9173', email: 'br@gmail.com', password: 'password')

s1 = Service.create(professional_id: p1.id, service_name: "Jus' a Cut", price: 25, description: 'Haircut with razor edge-up. Facial hair will not be touched', duration: '45 minutes' )
s2 = Service.create(professional_id: p2.id, service_name: "Haircut w/Facial Trim", price: 30, description: 'Haircut and facial hair will be trimmed', duration: '1 hour' )
s3 = Service.create(professional_id: p1.id, service_name: "Haircut and Facial Hair w/ Razor", price: 40, description: 'Haircut with soothing hot steam towel to give that fresh shave feeling', duration: '1 hour' )
s4 = Service.create(professional_id: p2.id, service_name: "Edge-up", price: 15, description: 'Edge the perimeter of your hair w/ razor', duration: '30 minutes' )

a1 = Appointment.create(client_id: c1.id, professional_id: p1.id, date_created: DateTime.strptime("09/11/2019 17:00", "%m/%d/%Y %H:%M"), appt_date_time: DateTime.strptime("09/21/2019 15:00", "%m/%d/%Y %H:%M"), duration: s1.duration, service_id: s1.id)
a2 = Appointment.create(client_id: c2.id, professional_id: p2.id, date_created: DateTime.strptime("09/12/2019 17:00", "%m/%d/%Y %H:%M"), appt_date_time: DateTime.strptime("09/22/2019 12:00", "%m/%d/%Y %H:%M"), duration: s2.duration, service_id: s2.id)
a3 = Appointment.create(client_id: c1.id, professional_id: p2.id, date_created: DateTime.strptime("09/13/2019 17:00", "%m/%d/%Y %H:%M"), appt_date_time: DateTime.strptime("09/23/2019 1:00", "%m/%d/%Y %H:%M"), duration: s1.duration, service_id: s1.id)
a4 = Appointment.create(client_id: c2.id, professional_id: p1.id, date_created: DateTime.strptime("09/14/2019 17:00", "%m/%d/%Y %H:%M"), appt_date_time: DateTime.strptime("09/24/2019 18:00", "%m/%d/%Y %H:%M"), duration: s4.duration, service_id: s4.id)



