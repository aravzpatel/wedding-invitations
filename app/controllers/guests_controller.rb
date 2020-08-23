class GuestsController < ApplicationController
  skip_before_action :verify_authenticity_token

  helper_method :current_user
  helper_method :logged_in?

  def show
    unless logged_in?
      flash[:alert] = "Naughty fish! You must be logged in to view this this page"
      redirect_to '/login'
    end

    @guests = Guest.all
  end

  def update
    @guest = Guest.find(params[:id])
    @guest.update(first_name: params[:first_name], last_name: params[:last_name], rsvp: params[:rsvp], email: params[:email], submit: true)
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in?
    !current_user.nil?
  end

end
