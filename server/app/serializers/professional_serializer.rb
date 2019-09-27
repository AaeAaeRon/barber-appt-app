class ProfessionalSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :mobile_num, :email
  end