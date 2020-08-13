require 'rails_helper'

RSpec.describe "Personalised Homepage", type: :system do
  before do
    driven_by :selenium, using: :headless_chrome
    party = Party.create({party: 'lil baby marley'})
    party.guests.create({first_name: 'Lil', last_name: 'Harper'})
    party.guests.create({first_name: 'Jack', last_name: 'Harper'})
    party.guests.create({first_name: 'Marley', last_name: 'Harper'})

    party2 = Party.create({party: 'grandma'})
    party2.guests.create({first_name: 'Grandma', last_name: 'Salter'})
  end
    
  it 'should provide a personalised homepage experience' do
    visit '/party/lil-baby-marley'
    expect(page).to have_content('Lil, Jack and Marley')
  end

  it 'should change the personalised homepage' do
    visit '/party/grandma'
    expect(page).to have_content('Welcome Grandma')
  end

  
end
