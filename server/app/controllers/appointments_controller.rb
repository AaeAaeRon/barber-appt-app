class AppointmentsController < ApplicationController

    before_action :check_authentication
    
    def index
        @appointments = Appointment.all
        render json: @appointments 
    end

    def show
        @appointment = Appointment.find(params[:id])
        render json: @appointment, :only =>[:startDate, :endDate, :canceled, :cancellation_reason], :include => {
            :client => {:only => [:first_name, :last_name]},
            :professional => {:only => [:first_name, :last_name]},
            :service => {:only => [:service_name, :price, :duration]}
        }
    end

    def create
        @appointment = Appointment.create(appointment_params) 
        render json: @appointment, statu: 201
    end

    def update
        @appointment = Appointment.find(params[:id])
        @appointment.update(appointment_params)
        render json: @appointment, status: 201
    end

    def destroy
        @appointment = Appointment.find(params[:id])
        @appointment.destroy
    end

    private
    def appointment_params
        params.require(:appointment).permit(:client_id, :professional_id, :date_created, :appt_date_time, :duration, :service_id)
    end 

end
