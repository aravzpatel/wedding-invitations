require 'rails_helper'

RSpec.describe "Personalised Homepage", type: :system do
  before do
    driven_by :selenium, using: :headless_chrome
    Party.create({party: 'lil baby marley'})
    Guest.create({name: 'Lil Harper', party: 'lil baby marley'})
    Guest.create({name: 'Jack Harper', party: 'lil baby marley'})
    Guest.create({name: 'Marley Harper', party: 'lil baby marley'})
  end
    
  it 'should provide a personalised homepage experience' do
    visit '/party/lil-baby-marley'
    click_button 'rsvp'
    
    within '.lil' do
      choose 'Attending'
    end

    within '.jack' do
      choose 'Attending'
    end

    within '.marley' do
      choose 'Attending'
    end

    fill_in 'email', with: 'jackharper@gmail.com'
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
