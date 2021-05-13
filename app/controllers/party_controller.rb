class PartyController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def show
    @party = Party.friendly.find(params[:id])
    @guests = @party.guests
    @submitted = @party.guests.count {|guest| guest.confirmsubmit == true}
    @evening = @party.guests.count {|guest| guest.evening_invite == true}
  end

  def update
    @party =Party.friendly.find(params[:id])
    @party.update(address_line_1: params[:address_line_1], address_line_2: params[:address_line_2], town: params[:town], postcode: params[:postcode], country: params[:country])
  end
end
