class GuestsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def update
    @guest = Guest.find(params[:id])
    @guest.update(first_name: params[:first_name], last_name: params[:last_name], rsvp: params[:rsvp], email: params[:email], submit: true)
  end

end
