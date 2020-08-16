Rails.application.routes.draw do
  root 'home#index'

  get '/party/:id', to: 'party#show', as: 'party'
  put '/party', to: 'party#update', as: 'update'
  
  resource :guests, only: [:update]
end
