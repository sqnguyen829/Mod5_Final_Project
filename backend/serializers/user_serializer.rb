class UserSerializer < ActiveModel::Serializer
    attributes :username, :email, :role, :firstname, :lastname
end