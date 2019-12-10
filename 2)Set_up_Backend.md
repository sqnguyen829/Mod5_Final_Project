make the models
rails g model Some_name attri attri:integer... --no-test-framework

add Gems
    gem 'bcrypt', '~> 3.1.7'
    gem 'rack-cors'
    gem "active_model_serializers", "~>0.10.7"

Once migration,relatioinship and seed is set up. Get all the methods you want to use in the controller.
Add [ gem 'rack-cors' ] to gemfile.
Remove the  gem 'webpacker', '~> 4.0’ since it was causing issue with turning on rails s

-set up routes for database, should be in backend/config/routes.rb set this code in there with the right resoucres you need:

    namespace :api do
        namespace :v1 do
            resources :someClass
                .
                .
                .
        end
    end


-inside the backend config/application.rb put inside class App...

    config.middleware.insert_before 0, Rack::Cors do
      allow do
          origins '*'
          resource '*', headers: :any, methods: [:get, :post, :patch, :delete]
      end
    end

Then inside app/controllers/application_controller.rb class put:

    skip_before_action :verify_authenticity_token
    
Done setting up the backend and frontend.

rails g controller some_names