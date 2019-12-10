class CreateProjectTicketSolvers < ActiveRecord::Migration[6.0]
  def change
    create_table :project_ticket_solvers do |t|
      t.integer :user_id
      t.integer :project_ticket_id

      t.timestamps
    end
  end
end
