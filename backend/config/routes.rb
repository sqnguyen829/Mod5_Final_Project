Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
        resources :users
        post '/login', to:'auth#create'
        resources :projects
        resources :project_tickets
        resources :project_members
        resources :project_ticket_solvers
    end
end
end
