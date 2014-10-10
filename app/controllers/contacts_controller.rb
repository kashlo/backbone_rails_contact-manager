class ContactsController < ApplicationController
  respond_to :html, :json

  def index
    @contacts = Contact.all
    respond_with @contacts
  end

  # def show
  #   @contact =  Contact.find(params[:id])
  #   respond_with @contact
  # end

  def update
    puts "_________update"
    puts contact_params
    @contact = Contact.find(params[:id])
    @contact.update_attributes(contact_params)
    respond_with @contact
  end

  def create
    @contact =  Contact.new(contact_params)
    @contact.save
    respond_with @contact
  end

  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy
    respond_with @contact
  end

  private

    def contact_params
      params.require(:contact).permit(:first_name, :last_name, :middle_name, :phone, :email, :group_id)
    end
end