Rails.application.routes.draw do
  root 'home#index'

  get '/party/:id', to: 'party#show', as: 'party'
  
  resource :party, only: [:show, :update]
  resource :guests, only: [:update]
end
