class Api::V1::ProjectTicketsController < ApplicationController
    def index
        projectTickets = ProjectTicket.all
        render json: projectTickets, except: []
    end
end
