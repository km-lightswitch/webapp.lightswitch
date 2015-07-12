class Credential < ActiveRecord::Base
  validates :name, presence: true
  validates :access_key_id, presence: true, length: {is: 21}
  validates :secret_access_key, presence: true, length: {is: 41}

end
