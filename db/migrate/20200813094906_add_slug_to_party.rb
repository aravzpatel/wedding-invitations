class AddSlugToParty < ActiveRecord::Migration[6.0]
  def change
    add_column :parties, :slug, :string
    add_index :parties, :slug, unique: true
  end
end
