class ProfessionalSerializer < ActiveModel::Serializer
    attributes :first_name, :last_name, :mobile_num, :email
  end