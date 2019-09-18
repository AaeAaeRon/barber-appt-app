class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    # before_action :check_authentication

    

    def encode_token(payload) ## For token generation
        JWT.encode(payload, 'SuperSecretKey') ##3rd argument algorithm is optional. Default HS256
    end

end
