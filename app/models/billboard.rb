class Billboard < ApplicationRecord
  validates :artist_name, presence: true
  validates :genre, presence: true
  validates :artist_name, length: {minimum: 2}
  validates :genre, length: {minimum: 2}
  validates :artist_name, uniqueness: true
end
