class AddEmailToGuests < ActiveRecord::Migration[6.0]
  def change
    add_column :guests, :email, :string
  end
end
