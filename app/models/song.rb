class Song < ApplicationRecord
  belongs_to :artist
  validates :song_name :duration :duration :plays_song presence: true
end
