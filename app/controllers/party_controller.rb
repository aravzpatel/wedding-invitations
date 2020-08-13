class PartyController < ApplicationController
  def show
    @party = Party.friendly.find(params[:id])
  end
end
