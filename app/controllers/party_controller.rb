class PartyController < ApplicationController
  def show
    p params
    @party = Party.friendly.find(params[:id])
  end
end
