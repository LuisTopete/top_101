class Billboard < ApplicationRecord
  has_many :artists, dependent: :destroy
  validates :artist_name, :genre, presence: true
end
