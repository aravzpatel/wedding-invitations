class PartyController < ApplicationController
  def show
    @party = Party.friendly.find(params[:id])
    @guests = @party.guests
  end
end
