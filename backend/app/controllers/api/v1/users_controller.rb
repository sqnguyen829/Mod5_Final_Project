class Api::V1::UsersController < ApplicationController
    skip_before_action :check_authentication, only: [:create]

    def index
        users = User.all
        render json: users, except: [:created_at, :updated_at]
    end

    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user, except: [:created_at, :updated_at]
        else 
            render json: {message: 'User not found'}
        end
    end

    def create
        user = User.new(user_params)
        if user.valid?
            user.save
            render json: user, except: [:password_digest]
            # render json: {user: UserSerializer.new(user)}, status: :created
        else
            # errorMsg = user.errors.full_messages
            render json: {error: 'Username or email has been taken.'}, status: :not_acceptable
        end
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user, except: [:created_at, :updated_at]
    end

    private
    def user_params
        params.require(:user).permit(:username,:email,:password,:role,:firstname,:lastname)
    end
end
