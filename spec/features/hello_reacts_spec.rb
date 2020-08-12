require 'rails_helper'

RSpec.describe "HelloReacts", type: :system do
  before do
    driven_by :selenium, using: :headless_chrome
  end
    
  it 'should render a React component' do
    visit '/'
    expect(page).to have_content('Save the date')
  end
end
