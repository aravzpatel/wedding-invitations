class GuestsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def update
    @guest = Guest.find(params[:id])
    @guest.update(confirmation: params[:confirmation], sunday: params[:sunday], diet: params[:diet],  confirmsubmit: true)
  end

end
