class ProfessionalsController < ApplicationController
    def index
        @professionals = Professional.all
        render json: @professionals 
    end

    def show
        @professional = Professional.find(params[:id])
        render json: @professional, :only =>[:first_name, :last_name, :mobile_num, :email], :include => {
            :appointments => {:only => [:appt_date_time]},
            :clients => {:only => [:first_name, :last_name]},
            :services => {:only => [:service_name, :price, :duration]}
        }
    end

    ## Sign Up ##
    def create
        @professional = Professional.create(professional_params)
        if @professional.valid?
            render json: { professionals: ProfessionalSerializer.new(@professional) }, status: :created
        else
            render json: { error: 'failed to create account' }, status: :not_acceptable
        end 
    end

    def update
        @professional = Professional.find(params[:id])
        @professional.update(professional_params)
        render json: @professional, status: 201
    end

    def destroy
        @professional = Professional.find(params[:id])
        @professional.destroy
    end


    def full_name 
        self.first_name +" " +self.last_name
    end


    private
    def professional_params
        params.require(:professional).permit(:first_name, :last_name, :mobile_num, :email, :password)
    end 
end
