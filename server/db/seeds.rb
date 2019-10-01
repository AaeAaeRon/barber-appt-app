




Client.destroy_all
Professional.destroy_all
Service.destroy_all
Appointment.destroy_all


c1 = Client.create(first_name: 'Aaron', last_name: 'Briscoe', mobile_num: '281-217-2419', email: 'abriscoe2008@gmail.com', password: 'password')
c2 = Client.create(first_name: 'John', last_name: 'Smith', mobile_num: '713-235-8392', email: 'js@yahoo.com', password: 'password')

p1 = Professional.create(first_name: 'James', last_name: 'Smith', mobile_num: '713-123-2684', email: 'james@gmail.com', password: 'password')
p2 = Professional.create(first_name: 'Blake', last_name: 'Randall', mobile_num: '832-934-9173', email: 'blakeyr@gmail.com', password: 'password')
p3 = Professional.create(first_name: 'Sean', last_name: 'Warn', mobile_num: '281-123-3453', email: 'seanw@hotmail.com', password: 'password')
p4 = Professional.create(first_name: 'Crystal', last_name: 'Savoy', mobile_num: '281-354-7408', email: 'crystals@gmail.com', password: 'password')
p5 = Professional.create(first_name: 'Tarique', last_name: 'Teller', mobile_num: '713-245-2357', email: 'tariman@gmail.com', password: 'password')
p6 = Professional.create(first_name: 'Dom', last_name: 'Cyrus', mobile_num: '832-213-2345', email: 'domdom@gmail.com', password: 'password')
p7 = Professional.create(first_name: 'Andre', last_name: 'Johnson', mobile_num: '713-657-2345', email: 'atg@yahoo.com', password: 'password')
p8 = Professional.create(first_name: 'Buck', last_name: 'Jones', mobile_num: '832-324-3632', email: 'niyb@gmail.com', password: 'password')
p9 = Professional.create(first_name: 'Ken', last_name: 'Giddings', mobile_num: '713-087-3457', email: 'keng@yahoo.com', password: 'password')
p10 = Professional.create(first_name: 'Lamar', last_name: 'Dale', mobile_num: '281-246-3454', email: 'llama@gmail.com', password: 'password')
p11 = Professional.create(first_name: 'Brit', last_name: 'Crass', mobile_num: '713-732-2380', email: 'britbrat@gmail.com', password: 'password')
p12 = Professional.create(first_name: 'Kameron', last_name: 'Dober', mobile_num: '713-345-3432', email: 'kambam@gmail.com', password: 'password')

s1 = Service.create(professional_id: p1.id, service_name: "Jus' a Cut", price: 25, description: 'Haircut with razor edge-up. Facial hair will not be touched', duration: '1 hour' )
s2 = Service.create(professional_id: p2.id, service_name: "Haircut w/Facial Trim", price: 30, description: 'Haircut and facial hair will be trimmed', duration: '1 hour' )
s3 = Service.create(professional_id: p3.id, service_name: "Haircut and Facial Hair w/ Razor", price: 40, description: 'Haircut with soothing hot steam towel to give that fresh shave feeling', duration: '1 hour' )
s4 = Service.create(professional_id: p4.id, service_name: "Edge-up", price: 15, description: 'Edge the perimeter of your hair w/ razor', duration: '1 hour' )
s5 = Service.create(professional_id: p5.id, service_name: "Kids Haircut", price: 15, description: '12 and under', duration: '1 hour' )
s6 = Service.create(professional_id: p6.id, service_name: "Teen Cut", price: 20, description: 'Over 12 years old', duration: '1 hour' )
s7 = Service.create(professional_id: p7.id, service_name: "Hairwash", price: 10, description: 'Wash and condition hair', duration: '1 hour' )
s8 = Service.create(professional_id: p8.id, service_name: "Jus' a Cut", price: 25, description: 'Haircut with razor edge-up. Facial hair will not be touched', duration: '1 hour' )
s9 = Service.create(professional_id: p9.id, service_name: "Haircut w/Facial Trim", price: 30, description: 'Haircut and facial hair will be trimmed', duration: '1 hour' )
s10 = Service.create(professional_id: p10.id, service_name: "Haircut and Facial Hair w/ Razor", price: 40, description: 'Haircut with soothing hot steam towel to give that fresh shave feeling', duration: '1 hour' )
s11 = Service.create(professional_id: p1.id, service_name: "Edge-up", price: 15, description: 'Edge the perimeter of your hair w/ razor', duration: '1 hour' )
s12 = Service.create(professional_id: p2.id, service_name: "Kids Haircut", price: 15, description: '12 and under', duration: '1 hour' )
s13 = Service.create(professional_id: p3.id, service_name: "Teen Cut", price: 20, description: 'Over 12 years old', duration: '1 hour' )
s14 = Service.create(professional_id: p7.id, service_name: "Hairwash", price: 10, description: 'Wash and condition hair', duration: '1 hour' )
s15 = Service.create(professional_id: p1.id, service_name: "Jus' a Cut", price: 25, description: 'Haircut with razor edge-up. Facial hair will not be touched', duration: '1 hour' )
s16 = Service.create(professional_id: p2.id, service_name: "Haircut w/Facial Trim", price: 30, description: 'Haircut and facial hair will be trimmed', duration: '1 hour' )
s17 = Service.create(professional_id: p3.id, service_name: "Haircut and Facial Hair w/ Razor", price: 40, description: 'Haircut with soothing hot steam towel to give that fresh shave feeling', duration: '1 hour' )
s18 = Service.create(professional_id: p4.id, service_name: "Edge-up", price: 15, description: 'Edge the perimeter of your hair w/ razor', duration: '1 hour' )
s19 = Service.create(professional_id: p5.id, service_name: "Kids Haircut", price: 15, description: '12 and under', duration: '1 hour' )
s20 = Service.create(professional_id: p6.id, service_name: "Teen Cut", price: 20, description: 'Over 12 years old', duration: '1 hour' )

a1 = Appointment.create(client_id: c1.id, c_name: c1.first_name, professional_id: p1.id, p_name: p1.first_name, service_id: s1.id, price: s1.price, startDate: "Tue Oct 01 2019 09:00:00 GMT-0500 (Central Daylight Time)", endDate: "Tue Oct 01 2019 10:00:00 GMT-0500 (Central Daylight Time)", duration: s1.duration, title: s1.service_name)
a2 = Appointment.create(client_id: c2.id, c_name: c2.first_name, professional_id: p2.id, p_name: p2.first_name, service_id: s2.id, price: s2.price, startDate: "Thu Oct 03 2019 11:00:00 GMT-0500 (Central Daylight Time)", endDate: "Thu Oct 03 2019 12:00:00 GMT-0500 (Central Daylight Time)", duration: s2.duration, title: s2.service_name)
a3 = Appointment.create(client_id: c1.id, c_name: c1.first_name, professional_id: p3.id, p_name: p3.first_name, service_id: s3.id, price: s3.price, startDate: "Fri Oct 04 2019 13:00:00 GMT-0500 (Central Daylight Time)", endDate: "Fri Oct 04 2019 14:00:00 GMT-0500 (Central Daylight Time)", duration: s3.duration, title: s3.service_name)
a4 = Appointment.create(client_id: c2.id, c_name: c2.first_name, professional_id: p4.id, p_name: p4.first_name, service_id: s4.id, price: s4.price, startDate: "Mon Oct 07 2019 15:00:00 GMT-0500 (Central Daylight Time)", endDate: "Mon Oct 07 2019 16:00:00 GMT-0500 (Central Daylight Time)", duration: s4.duration, title: s4.service_name)


# THIS IS HOW RUBY CAN FORMAT TIME HOWEVER YOU WOULD LIKE 
# https://ruby-doc.org/core-2.0.0/Time.html#method-i-strftime

# t = Time.new(2007,11,19,8,37,48,"-06:00") #=> 2007-11-19 08:37:48 -0600
# t.strftime("Printed on %m/%d/%Y")   #=> "Printed on 11/19/2007"
# t.strftime("at %I:%M%p")            #=> "at 08:37AM"