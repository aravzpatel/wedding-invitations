class CreateGuests < ActiveRecord::Migration[6.0]
  def change
    create_table :guests do |t|
      t.string :first_name
      t.string :last_name
      t.boolean :rsvp
      t.belongs_to :party, index: true

      t.timestamps
    end
    add_index :guests, :first_name
    add_index :guests, :last_name
  end
end
