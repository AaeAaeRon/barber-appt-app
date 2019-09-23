class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    before_action :check_authentication

    def encode_token(payload) ## For token generation
        JWT.encode(payload, 'SuperSecretKey') ##3rd argument algorithm is optional. Default HS256
    end

    def auth_header
        # { 'Authorization': 'Bearer <token>' }
        request.headers['Authorization']
        # byebug
    end
    
    def current_client
        # byebug
        if decoded_token
        # byebug
          client_id = decoded_token
          Client.find(client_id)
        end
    end

    def current_prof
        # byebug
        if decoded_token
        # byebug
          professional_id = decoded_token
          Professional.find(professional_id)
        end
    end
    
    def decoded_token
        # token => "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI"
        if auth_header
          token = auth_header.split(' ')[1]
            # byebug
          begin
            # byebug
           JWT.decode(token,'SuperSecretKey')[0] #pass the same key
            # JWT.decode => [{ "user_id"=>"18" }, { "alg"=>"HS256" }]
            # [0] gives us the payload { "user_id"=>"18" }
          rescue JWT::DecodeError
            nil
          end
        end
    end
    
    def check_authentication
        render json: { error: 'Please log in' }, status: 401 if !logged_in?
    end
    
    def logged_in?
        !!current_client || !!current_prof
    end

end
