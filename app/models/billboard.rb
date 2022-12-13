class Billboard < ApplicationRecord
  validates :artist_name, presence: true, length: {minimum: 2}
  validates :genre, presence: true, length: {minimum: 2}
end
