class AddAddressToParty < ActiveRecord::Migration[6.0]
  def change
    add_column :parties, :address_line_1, :string
    add_column :parties, :address_line_2, :string
    add_column :parties, :town, :string
    add_column :parties, :country, :string
    add_column :parties, :postcode, :string
  end
end
