class AddDietToGuests < ActiveRecord::Migration[6.0]
  def change
    add_column :guests, :otherdiet, :string
  end
end
