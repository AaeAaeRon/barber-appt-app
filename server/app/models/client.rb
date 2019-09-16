class Client < ApplicationRecord
    has_many :appointments
    has_many :professionals, through: :appointments
    has_secure_password
end
