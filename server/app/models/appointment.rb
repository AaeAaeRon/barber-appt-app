class Appointment < ApplicationRecord
    belongs_to :client
    belongs_to :professional
    belongs_to :service
    

end
