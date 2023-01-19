class Artist < ApplicationRecord
  belongs_to :billboard
  validates :artist_name, :desc, :plays_artist, presence: true
end
