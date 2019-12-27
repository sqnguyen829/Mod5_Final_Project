class Api::V1::ProjectTicketsController < ApplicationController
    def index
        projectTickets = ProjectTicket.all
        render json: projectTickets, except: [:created_at, :updated_at]
    end

    def show 
        projectTicket = ProjectTicket.find_by(id: params(:id))
        if projectTicket
            render json: projectTicket 
        else
            render json: {message: "No project ticket found by that ID"}
        end
    end

    def create
        byebug
        projectTicket = ProjectTicket.create(projectTicket_params)
        byebug
        render json: projectTicket
    end

    private
    def projectTicket_params
        params.require(:project_ticket).permit(:user_id,:project_id, :title, :desc, :status, :priority, :type_of_ticket)
        #Error that i was fixing had an issue with the key projectTicket, it was looking for the key project_ticket when i was posting
        # params.require(:projectTicket).permit(:user_id,:project_id, :title, :desc, :status, :priority, :type_of_ticket)
    end
end
