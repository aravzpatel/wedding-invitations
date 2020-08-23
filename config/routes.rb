Rails.application.routes.draw do
  
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  
  resources :users

  get '/party/:id', to: 'party#show', as: 'party'
  put '/party', to: 'party#update', as: 'update'
  
  resource :guests, only: [:update, :show]
  resources :sessions, only: [:new, :create, :destroy]
end
