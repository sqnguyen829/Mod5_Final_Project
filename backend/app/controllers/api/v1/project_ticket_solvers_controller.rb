class Api::V1::ProjectTicketSolversController < ApplicationController
    def index
        projectTicketSolvers = ProjectTicketSolver.all
        render json: projectTicketSolvers, except: []
    end
end
