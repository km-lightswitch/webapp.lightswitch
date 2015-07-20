class User < ActiveRecord::Base
  authenticates_with_sorcery!

  has_one :profile

  validates :password, length: { minimum: 7 }
  validates :password, confirmation: true
  validates :email, uniqueness: true, email_format: { message: 'has invalid format' }

end
