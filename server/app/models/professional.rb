class Professional < ApplicationRecord
    has_many :appointments
    has_many :clients, through: :appointments
    has_many :services 
    has_secure_password
    
end
