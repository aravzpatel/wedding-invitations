require 'rails_helper'

RSpec.describe "Personalised Homepage", type: :system do
  before do
    driven_by :selenium, using: :headless_chrome
    party = Party.create({party: 'lil baby marley'})
    party.guests.create({first_name: 'Lil', last_name: 'Harper'})
    party.guests.create({first_name: 'Jack', last_name: 'Harper'})
    party.guests.create({first_name: 'Marley', last_name: 'Harper'})
  end
    
  it 'should provide a personalised homepage experience' do
    visit '/party/lil-baby-marley'
    click_button 'RSVP'
    
    within '.Lil' do
      fill_in 'email', with: 'lil@gmail.com'
      check 'isGoing'
      click_button 'Submit'
    end

    within '.Jack' do
      fill_in 'email', with: 'jacklawrenceharper@gmail.com'
      check 'isGoing'
      click_button 'Submit'
    end

    within '.Marley' do
      fill_in 'email', with: ''
      check 'isGoing'
      click_button 'Submit'
    end

    fill_in 'address1', with: '23 something'
    fill_in 'address2', with: 'street'
    fill_in 'town', with: 'London'
    fill_in 'county', with: 'london'
    fill_in 'postcode', with: 'ne12 3rd'
    fill_in 'country', with: 'UK'

    click_button 'Submit'

    expect(page).to have_content("We're delighted that you are able to attend")
  end

  
end
