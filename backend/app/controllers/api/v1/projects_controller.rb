class Api::V1::ProjectsController < ApplicationController
    def index
        projects = Project.all
        # render projects.to_json(:include => [:user, {:project_tickets => {:include => [:user]}}])
        # render json: projects, :include => { :user, :project_tickets => {:include => :user}}
        render json: projects, include: [:user,:project_members, :project_tickets, :users ]
    end
    # render json: users.as_json(except: [:created_at, :updated_at], :include => {:cars=>{except: [:created_at, :updated_at]}, :renting_cars =>{except: [:created_at, :updated_at]}})
    
    def show 
        project = Project.find_by(id: params(:id))
        if project
            render json: project 
        else
            render json: {message: "No project found by that ID"}
        end
    end

    def create
        project = Project.create(project_params)
        render json: project
    end

    def update
        project = Project.find(params[:id])
        project.update(project_params)
        render json: project, include: [:user,:project_members, :project_tickets, :users ]
    end

    def destroy
        project = Project.find(params[:id])
        project.destroy
    end

    private
    def project_params
        params.require(:project).permit(:user_id, :title, :desc, :status)
    end
end
