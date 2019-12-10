class Api::V1::ProjectMembersController < ApplicationController
    def index
        projectMembers = ProjectMember.all
        render json: projectMembers, except: []
    end
end
