Rails.application.routes.draw do
  root 'home#index'

  get '/party/:id', to: 'party#show', as: 'party'
  
  resource :party, only: [:show]
end
