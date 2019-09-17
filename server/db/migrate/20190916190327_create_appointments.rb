class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.integer :client_id
      t.integer :professional_id
      t.datetime :date_created
      t.datetime :appt_date_time
      t.interval :duration
      t.integer :service_id
      t.boolean :canceled, :default => false
      t.string :cancellation_reason, :default => :null

      t.timestamps
    end
  end
end
