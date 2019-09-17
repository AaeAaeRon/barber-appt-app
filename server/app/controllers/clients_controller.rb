class ClientsController < ApplicationController
    def index
        @clients = Client.all
        render json: @clients 
    end

    def show
        @client = Client.find(params[:id])
        render json: @client, :only =>[:first_name, :last_name, :mobile_num, :email], :include => {
            :appointments => {:only => [:appt_date_time]},
            :professionals => {:only => [:first_name, :last_name]},
            :services => {:only => [:service_name, :price, :duration]}
        }
    end

    def create
        @client = Client.create(client_params)
        
        ##THIS NEED TO BE VALIDATED/AUTH ETC. 
        render json: @client, statu: 201
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
