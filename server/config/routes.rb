Rails.application.routes.draw do
  resources :clients
  resources :appointments
  resources :professionals
  resources :services

  post '/signup', to: 'professional#create'
  post '/signup', to: 'client#create'
  post '/login/client', to: 'auth#loginClient'
  post '/login/prof', to: 'auth#loginProf'

end
