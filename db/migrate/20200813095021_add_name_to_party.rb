class AddNameToParty < ActiveRecord::Migration[6.0]
  def change
    add_column :parties, :party, :string
  end
end
