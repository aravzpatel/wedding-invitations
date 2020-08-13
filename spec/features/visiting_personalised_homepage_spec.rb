require 'rails_helper'

RSpec.describe "Personalised Homepage", type: :system do
  before do
    driven_by :selenium, using: :headless_chrome
  end
    
  it 'should provide a personalised homepage experience' do
    visit '/users/lilbabymarley'
    expect(page).to have_content('Save the date')
  end

  
end
