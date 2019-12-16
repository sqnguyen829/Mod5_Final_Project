class Api::V1::ProjectTicketsController < ApplicationController
    def index
        projectTickets = ProjectTicket.all
        render json: projectTickets, except: [:created_at, :updated_at]
    end
end
