class Artist < ApplicationRecord
  has_many :artist_names, dependent: :destroy
  belongs_to :billboard
  validates :artist_name, :desc, :plays_artist, presence: true
end
