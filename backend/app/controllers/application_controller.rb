class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    before_action :check_authentication

    #this creates a token
    def encode_token(payload)# for token generation
        JWT.encode(payload, "ProjManageSecretKey", "HS256") #algo is optioinal as a default HS256
    end

    def auth_header
        # { 'Authorization': 'Bearer <token>' }
        # byebug
        request.headers['Authorization']
    end
    
    #if decoded_token is true decode the token using the user_id and find that user
    def current_user
        if decoded_token
          user_id = decoded_token["user_id"]
  
          User.find(user_id)
        end
    end
    
    def decoded_token
        if auth_header
          token = auth_header.split(' ')[1]
          # byebug
            # puts token
          begin
           JWT.decode(token,"ProjManageSecretKey")[0] 
          rescue JWT::DecodeError
            # byebug
            nil
          end
        end
    end
    
    #this is the first function that runs because of before action
    def check_authentication
        render json: { error: 'Please log in' }, status: 401 if !logged_in?
    end
    
    #if logged_in is true call a another method current_user
    def logged_in?
        #the !! is just finding a vaule true or false
        !!current_user
    end
end
