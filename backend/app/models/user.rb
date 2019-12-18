class User < ApplicationRecord
    has_secure_password
    has_many :projects
    has_many :project_members
    has_many :project_tickets
    has_many :project_ticket_solvers
    has_many :projects, through: :project_tickets
end
