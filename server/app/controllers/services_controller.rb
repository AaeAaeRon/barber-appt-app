class ServicesController < ApplicationController

    before_action :check_authentication

    def index
        @services = Service.all
        render json: @services 
    end

    def show
        @service = Service.find(params[:id])
        render json: @service, :only =>[:service_name, :price, :duration, :description], :include => {
            :appointments => {:only => [:appt_date_time]},
            :professional => {:only => [:first_name, :last_name]}
        }
    end

    def create
        @service = Service.create(service_params)
        render json: @service, status: 201
    end

    def update
        @service = Service.find(params[:id])
        @service.update(service_params)
        render json: @service, status: 201
    end

    def destroy
        @service = Service.find(params[:id])
        @service.destroy
    end

    private
    def service_params
        params.require(:service).permit(:professional_id, :service_name, :price, :description, :duration)
    end 
end
