class AddSubmitColumnToGuests < ActiveRecord::Migration[6.0]
  def change
    add_column :guests, :submit, :boolean
  end
end
