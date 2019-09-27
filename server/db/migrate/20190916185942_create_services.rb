class CreateServices < ActiveRecord::Migration[6.0]
  def change
    create_table :services do |t|
      t.integer :professional_id
      t.string :service_name
      t.integer :price
      t.string :description
      t.string :duration
      t.boolean :show, :default => false

      t.timestamps
    end
  end
end
