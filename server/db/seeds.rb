




Client.destroy_all
Professional.destroy_all
Service.destroy_all
Appointment.destroy_all


c1 = Client.create(first_name: 'Aaron', last_name: 'Briscoe', mobile_num: '281-217-2419', email: 'abriscoe2008@gmail.com', password: 'password')
c2 = Client.create(first_name: 'John', last_name: 'Smith', mobile_num: '713-235-8392', email: 'js@yahoo.com', password: 'password')

p1 = Professional.create(first_name: 'James', last_name: 'Smith', mobile_num: '713-123-2684', email: 'js@gmail.com', password: 'password')
p2 = Professional.create(first_name: 'Blake', last_name: 'Randall', mobile_num: '832-934-9173', email: 'br@gmail.com', password: 'password')

s1 = Service.create(professional_id: p1.id, service_name: "Jus' a Cut", price: 25, description: 'Haircut with razor edge-up. Facial hair will not be touched', duration: '1 hour' )
s2 = Service.create(professional_id: p2.id, service_name: "Haircut w/Facial Trim", price: 30, description: 'Haircut and facial hair will be trimmed', duration: '1 hour' )
# s3 = Service.create(professional_id: p1.id, service_name: "Haircut and Facial Hair w/ Razor", price: 40, description: 'Haircut with soothing hot steam towel to give that fresh shave feeling', duration: '1 hour' )
# s4 = Service.create(professional_id: p2.id, service_name: "Edge-up", price: 15, description: 'Edge the perimeter of your hair w/ razor', duration: '30 minutes' )

a1 = Appointment.create(client_id: c1.id, c_name: c1.first_name, professional_id: p1.id, p_name: p1.first_name, service_id: s1.id, price: s1.price, startDate: "Fri Sep 27 2019 9:00:00 GMT-0500 (Central Daylight Time)", endDate: "Fri Sep 27 2019 10:00:00 GMT-0500 (Central Daylight Time)", duration: s1.duration, title: s1.service_name)
a2 = Appointment.create(client_id: c1.id, c_name: c1.first_name, professional_id: p2.id, p_name: p2.first_name, service_id: s2.id, price: s2.price, startDate: "09 28 2019 10:00:00 GMT-0500", endDate: "09 28 2019 11:00:00 GMT-0500", duration: s2.duration, title: s2.service_name)
a3 = Appointment.create(client_id: c1.id, c_name: c1.first_name, professional_id: p2.id, p_name: p2.first_name, service_id: s1.id, price: s1.price, startDate: "09 29 2019 13:00:00 GMT-0500", endDate: "09 29 2019 14:00:00 GMT-0500", duration: s1.duration, title: s1.service_name)
a4 = Appointment.create(client_id: c2.id, c_name: c2.first_name, professional_id: p1.id, p_name: p1.first_name, service_id: s1.id, price: s1.price, startDate: "09 30 2019 15:00:00 GMT-0500", endDate: "09 30 2019 16:00:00 GMT-0500", duration: s1.duration, title: s1.service_name)


# THIS IS HOW RUBY CAN FORMAT TIME HOWEVER YOU WOULD LIKE 
# https://ruby-doc.org/core-2.0.0/Time.html#method-i-strftime

# t = Time.new(2007,11,19,8,37,48,"-06:00") #=> 2007-11-19 08:37:48 -0600
# t.strftime("Printed on %m/%d/%Y")   #=> "Printed on 11/19/2007"
# t.strftime("at %I:%M%p")            #=> "at 08:37AM"