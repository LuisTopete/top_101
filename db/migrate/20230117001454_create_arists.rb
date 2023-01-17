class CreateArists < ActiveRecord::Migration[7.0]
  def change
    create_table :arists do |t|
      t.string :artist_name
      t.text :desc
      t.string :plays_artist
      t.belongs_to :billboard, null: false, foreign_key: true

      t.timestamps
    end
  end
end
