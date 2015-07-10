class CredentialsController < ApplicationController

  def new
  end

  def index
    @credentials = Credential.all
  end

  def create
    @credential = Credential.new(params.require(:credential).permit(:name, :access_key_id, :secret_access_key))

    @credential.save
    redirect_to action: 'show', id: @credential.id
  end

  def show
    @credential = Credential.find(params[:id])
  end

end
