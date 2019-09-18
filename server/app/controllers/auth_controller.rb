class AuthController < ApplicationController
    # skip_before_action :check_authentication, only: [:create]

    def loginClient
        # byebug
        client = Client.find_by(email: params[:email])

        if client && client.authenticate(params[:password])
            render json: {email: client.email, id: client.id, token: encode_token({client_id: client.id}) }
        else 
            render json: {error: 'Invalid email or password'}
        end 
        
    end

    def loginProf
        # byebug
        professional = Professional.find_by(email: params[:email])

        if professional && professional.authenticate(params[:password])
            render json: {email: professional.email, id: professional.id, token: encode_token({professional_id: professional.id}) }
        else 
            render json: {error: 'Invalid email or password'}
        end
        # byebug
    end
    
end


# look at JWT part 2 vid @ 55min to do conditional rendering based on if logged or not. 