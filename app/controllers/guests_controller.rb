class GuestsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def update
    @guest = Guest.find(params[:id])
    @guest.update(confirmation: params[:confirmation], sunday: params[:sunday], diet: params[:diet],  otherdiet: params[:otherdiet], confirmsubmit: true, evening_confirmation: params[:evening_confirmation])
  end

end
