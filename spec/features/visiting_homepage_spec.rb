require 'rails_helper'

RSpec.feature "homepage", type: :feature, js: true do
  scenario "Visitor goes to the homepage" do
    visit "/"
    expect(page).to have_content("Save the date")
  end
end