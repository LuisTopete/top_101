class Song < ApplicationRecord
  validates :song_name, :duration, :plays_song, presence: true
  belongs_to :artist
end
