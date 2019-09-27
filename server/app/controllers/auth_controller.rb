class AuthController < ApplicationController

    skip_before_action :check_authentication, only: [:loginClient, :loginProf]
    

    def loginClient
        # byebug
        client = Client.find_by(email: params[:email])

        if client && client.authenticate(params[:password])
            render json: {email: client.email, token: encode_token("#{client.id}"), id: client.id, type: client.userType, name: client.first_name }
        else 
            render json: {error: 'Invalid email or password'}
        end 
        
    end

    def loginProf
        # byebug
        professional = Professional.find_by(email: params[:email])

        if professional && professional.authenticate(params[:password])
            render json: {email: professional.email, token: encode_token("#{professional.id}"), id: professional.id, type: professional.userType, name: professional.first_name }
        else 
            render json: {error: 'Invalid email or password'}
        end
        # byebug
    end
    
end


# look at JWT part 2 vid @ 55min to do conditional rendering based on if logged or not. 