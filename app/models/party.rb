class Party < ApplicationRecord
  extend FriendlyId
  friendly_id :party, use: :slugged
end
