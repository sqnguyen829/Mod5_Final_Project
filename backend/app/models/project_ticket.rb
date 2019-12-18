class ProjectTicket < ApplicationRecord
    belongs_to :user
    belongs_to :project
    has_many :project_ticket_solvers

    # def self.users
    #     pts = self.all
        
    # end
end

