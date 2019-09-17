class Service < ApplicationRecord
    belongs_to :professional
    has_many :appointments 

end
