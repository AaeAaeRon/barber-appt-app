class Service < ApplicationRecord
    belongs_to :professional
    has_many :appointments, through: :professional
end
