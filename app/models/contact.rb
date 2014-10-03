class Contact < ActiveRecord::Base

  default_scope -> { order(first_name: :asc) }

  belongs_to :group

  validates :first_name, presence: true
end
