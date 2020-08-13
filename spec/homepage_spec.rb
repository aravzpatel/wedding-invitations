require 'rails_helper'

RSpec.describe "Homepage", type: :system do
  before do
    driven_by :selenium, using: :headless_chrome
  end
    
  it 'should render a React component' do
    visit '/'
    expect(page).to have_content('Save the date')
  end

  it 'should render an image' do
    visit '/'
    expect(page).to have_css(".SaveDate")
    expect(page).to have_css("img[src*='holder']")
  end
end
