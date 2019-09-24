class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.integer :client_id
      t.string :c_name
      t.integer :professional_id
      t.string :p_name
      t.integer :service_id
      t.string :s_name
      t.integer :price
      t.string :startDate
      t.string :endDate
      t.string :title, :default => :null
      t.boolean :allDay, :default => false
      t.string :duration
      t.boolean :canceled, :default => false
      t.string :cancellation_reason, :default => :null
      t.timestamps
    end
  end
end
