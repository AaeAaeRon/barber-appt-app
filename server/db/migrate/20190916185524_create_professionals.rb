class CreateProfessionals < ActiveRecord::Migration[6.0]
  def change
    create_table :professionals do |t|
      t.string :first_name
      t.string :last_name
      t.string :mobile_num
      t.string :email
      t.string :password_digest
      t.string :userType, :default => 'p'
      t.timestamps
    end
  end
end
