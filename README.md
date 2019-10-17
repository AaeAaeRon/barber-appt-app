# module-5-project
Version 1.0 10/2/19

This booking app is currently marketed towards barbers at this time. Later this app will be built out to market to any freelance professional such as tattoo artists, photographers, stylists, makeup artists, etc. 

The frontend or 'client' directory was created with Reactjs and the backend or 'server' directory was created using Ruby on Rails. 

To begin the program after cloning down to your local machine you will 'cd' into the server directory and run 'bundle install'. After that you will typr into the terminal 'rails db:create' then 'rails db:migrate' and finally 'rails db:seed'. Once those steps are finished you will run 'rails s' or 'rails server' to start the Rails server on http://localhost:3000.

Next you can 'cd' into the client directory and run 'npm install', after that finishes you will run 'npm start'. The terminal will prompt you that there is something currently running on port 3000 and would you like to use a different port. Type 'y' into the terminal. This should open the program at http://localhost:3001 which is the home page for BookdBarbr Booking application. There you can sign up as a client (someone who wants a haircut) or a professional (someone who cuts hair).

A client can make appointments with barbers and delete them and see their appointments on a calendar as well as on a dedicated appointments page. 

A professional can create new services that they provide and see a calendar of their appointments.

A video demo can be found at https://youtu.be/V8a61I4zw-I



