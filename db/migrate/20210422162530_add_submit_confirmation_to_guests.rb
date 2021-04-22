class AddSubmitConfirmationToGuests < ActiveRecord::Migration[6.0]
  def change
    add_column :guests, :confirmsubmit, :boolean
  end
end
