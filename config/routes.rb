Rails.application.routes.draw do
  namespace :api do 
    resources :billboards do
      resources :artists
    end

    # resources :artists, except: [:index, :show, :create, :update, :destroy] do
    #   resources :songs
    # end

  end
end