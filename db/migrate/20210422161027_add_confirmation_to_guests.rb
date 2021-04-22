class AddConfirmationToGuests < ActiveRecord::Migration[6.0]
  def change
    add_column :guests, :confirmation, :string
    add_column :guests, :diet, :string
    add_column :guests, :sunday, :string
  end
end
