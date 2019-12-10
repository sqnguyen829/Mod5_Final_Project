class ProjectTicketSolver < ApplicationRecord
    belongs_to :user
    belongs_to :project_ticket
end
