class CreateProjectTickets < ActiveRecord::Migration[6.0]
  def change
    create_table :project_tickets do |t|
      t.integer :user_id
      t.integer :project_id
      # t.string :assignedTo
      t.string :title
      t.string :desc
      t.string :status
      t.string :priority
      t.string :type_of_ticket

      t.timestamps
    end
  end
end
