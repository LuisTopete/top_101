class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.string :song_name
      t.string :duration
      t.string :plays_song
      t.boolean :fav
      t.belongs_to :artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
