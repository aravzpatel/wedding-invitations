require 'rails_helper'

RSpec.describe "Personalised Homepage", type: :system do
  before do
    driven_by :selenium, using: :headless_chrome
    Party.create({party: 'lil baby marley'})
  end
    
  it 'should provide a personalised homepage experience' do
    visit '/party/lil-baby-marley'
    expect(page).to have_content('Lil, Jack and Marley')
  end

  
end
