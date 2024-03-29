class Api::BillboardsController < ApplicationController
 
before_action :set_billboard, only: [:show, :update, :destroy]

  def index
    render json: Billboard.all
  end

  def show
    render json: @billboard
  end

  def create
    @billboard = Billboard.new(billboard_params)
    if @billboard.save
      render json: @billboard
    else 
      render json: {errors: @billboard.errors}, status: :unprocessable_entity
    end
  end

  def update
    if @billboard.update(billboard_params)
      render json: @billboard
    else
      render json: { errors: @billboard.errors}, status: :unprocessable_entity 
      end
  end

  def destroy
    @billboard.destroy
    render json: { message: 'Billboard deleted' }
  end

  private 
  def billboard_params
    params.require(:billboard).permit(:artist_name, :genre) 
  end

  def set_billboard
    @billboard = Billboard.find(params[:id])
  end
end
