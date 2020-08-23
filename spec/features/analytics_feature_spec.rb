require 'rails_helper'

RSpec.describe "Personalised Homepage", type: :system do
  before do
    driven_by :selenium, using: :headless_chrome
    party = Party.create({party: 'lil baby marley'})
    party.guests.create({first_name: 'Lil', last_name: 'Harper'})
    party.guests.create({first_name: 'Jack', last_name: 'Harper'})
    party.guests.create({first_name: 'Marley', last_name: 'Harper'})
    User.create(username: 'aravolivia', password: 'this')
  end

  it "should show you live analytics on guests" do
    visit '/login'
    fill_in 'username', with: 'aravolivia'
    fill_in 'password', with: 'this'
    click_button 'Login'

    expect(page).to have_css('table', text: 'Lil')
    expect(page).to have_css('table', text: 'Jack')
    expect(page).to have_css('table', text: 'Marley')
  end
end