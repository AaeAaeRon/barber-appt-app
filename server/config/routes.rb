Rails.application.routes.draw do
  resources :clients
  resources :appointments
  resources :professionals
  resources :services

  post '/signup', to: 'professional#create'
  post '/signup', to: 'client#create'
  post '/login', to: 'auth#create'
end
