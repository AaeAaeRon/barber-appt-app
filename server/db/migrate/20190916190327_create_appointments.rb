class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.integer :client_id
      t.integer :professional_id
      t.timestamp :date_created
      t.timestamp :start_time
      t.timestamp :end_time
      t.boolean :canceled
      t.string :cancellation_reason

      t.timestamps
    end
  end
end
