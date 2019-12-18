class Project < ApplicationRecord
    belongs_to :user
    has_many :project_members
    has_many :project_tickets
    has_many :users, through: :project_tickets
end
