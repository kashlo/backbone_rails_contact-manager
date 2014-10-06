class GroupsController < ApplicationController
  respond_to :html, :json

  def index
    @groups = Group.all
    respond_with @groups
  end

  # def show
  #   @contact =  Contact.find(params[:id])
  #   respond_with @contact
  # end

  def update
    @group = Group.find(params[:id])
    @group.update_attributes(group_params)
    respond_with @group
  end

  def create
    @group =  Group.new(group_params)
    @group.save
    respond_with @group
  end

  def destroy
    @group = Group.find(params[:id])
    @group.destroy
    respond_with @group
  end

  private

    def group_params
      params.require(:group).permit(:name)
    end
end