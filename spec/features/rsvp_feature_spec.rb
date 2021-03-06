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

    fill_in 'addressLine1', with: '23 something'
    fill_in 'addressLine2', with: 'street'
    fill_in 'town', with: 'London'
    fill_in 'postcode', with: 'ne12 3rd'
    fill_in 'country', with: 'UK'

    click_button 'Submit'

    expect(page).to have_xpath("//img[contains(@src,'Thankyou')]")
  end

  it "should require all guests to submit before proceeding" do
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

    expect(page).to have_content("Please provide your address")
  end

  it "should not allow guest to rsvp if all guests have submitted" do
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

    fill_in 'addressLine1', with: '23 something'
    fill_in 'addressLine2', with: 'street'
    fill_in 'town', with: 'London'
    fill_in 'postcode', with: 'ne12 3rd'
    fill_in 'country', with: 'UK'

    click_button 'Submit'

    visit '/party/lil-baby-marley'
    expect(page).not_to have_content("RSVP")
  end
  
end
