class Billboard < ApplicationRecord
  validates :artist_name, :genre, presence: true
end
