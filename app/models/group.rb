class Group < ActiveRecord::Base
  default_scope -> { order(name: :asc) }

  has_many :contacts

  validates :name, presence: true
end
