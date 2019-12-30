class Api::V1::ProjectTicketsController < ApplicationController
    def index
        projectTickets = ProjectTicket.all
        render json: projectTickets, :include => [:project, :user, :project_ticket_solvers => {:include => :user}]
        # render json: projects, :include => [ :user, :project_tickets => {:include => [:user, :project_ticket_solvers => {:include => :user}]}]
    end

    def show 
        projectTicket = ProjectTicket.find_by(id: params(:id))
        if projectTicket
            render json: projectTicket, :include => [:project, :user, :project_ticket_solvers => {:include => :user}]
        else
            render json: {message: "No project ticket found by that ID"}
        end
    end

    def create
        # byebug
        projectTicket = ProjectTicket.create(projectTicket_params)
        # byebug
        render json: projectTicket, :include => [:project, :user, :project_ticket_solvers => {:include => :user}]
    end

    def update
        projectTicket = ProjectTicket.find(params[:id])
        projectTicket.update(projectTicket_params)
        render json: projectTicket, :include => [:user, :project_ticket_solvers => {:include => :user}]
    end

    def destroy
        projectTicket = ProjectTicket.find(params[:id])
        projectTicket.destroy
    end
    private
    def projectTicket_params
        params.require(:project_ticket).permit(:user_id,:project_id, :title, :desc, :status, :priority, :type_of_ticket)
        #Error that i was fixing had an issue with the key projectTicket, it was looking for the key project_ticket when i was posting
        # params.require(:projectTicket).permit(:user_id,:project_id, :title, :desc, :status, :priority, :type_of_ticket)
    end
end
