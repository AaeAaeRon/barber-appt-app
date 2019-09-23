class ClientsController < ApplicationController

    skip_before_action :check_authentication, only: [:create]


    def index
        @clients = Client.all
        render json: @clients 
    end

    def show
        @client = Client.find(params[:id])
        render json: @client, :only =>[:first_name, :last_name, :mobile_num, :email], :include => {
            :appointments => {:only => [:starDate]},
            :professionals => {:only => [:first_name, :last_name]},
            :services => {:only => [:service_name, :price, :duration]}
        }
    end

    ## Sign Up CREATES NEW CLIENTS ##
    def create
        @client = Client.create(client_params)
        # byebug
        if @client.valid?
            render json: { client: ClientSerializer.new(@client) }, status: :created
        else
            render json: { error: 'failed to create account' }, status: :not_acceptable
        end 
    end

    def update
        @client = Client.find(params[:id])
        @client.update(client_params)
        render json: @client, status: 201
    end

    def destroy
        @client = Client.find(params[:id])
        @client.destroy
    end

    def name 
        self.first_name +" " +self.last_name
    end

    private
    def client_params
        params.require(:client).permit(:first_name, :last_name, :mobile_num, :email, :password)
    end 
end
