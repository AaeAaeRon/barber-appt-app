# module-5-project

This booking app marketed towards barbers at this time was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Later this app will be built out to market to any freelance professional such as tattoo artists, photographers, stylists, makeup artists, etc.

The frontend or 'client' folder was created with Reactjs and the backend or 'server' folder was created using Ruby on Rails. 

To begin the program after cloning down to your local machine you will 'cd' into the server directory and run 'rails db:create' then 'rails db:migrate' then 'rails db:migrate' and finally 'rails db:seed'. Once those steps are finished you will run 'rails s' or 'rails server' to start the Rails server on http://localhost:3000.

Next you can 'cd' into the client directory and run 'npm install', after that finishes you will run 'npm start'. The terminal will prompt you that there is something currently running on port 3000 and would you like to use a different port. Type 'y' into the terminal. This should open the program at http://localhost:3001 which is the home page for BookdBarbr Booking application. There you can sign up as a client (someone who wants a haircut) or a professional (someone who cuts hair).

A client can make appointments with barbers and delete them and see their appointments. 

A professional can create new services that they provide and see a calendar of their appointments. 


