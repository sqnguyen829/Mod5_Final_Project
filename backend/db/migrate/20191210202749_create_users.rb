class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :role
      t.string :firstname
      t.string :lastname
      # t.string :securityQue
      # t.string :securityAns

      t.timestamps
    end
  end
end
