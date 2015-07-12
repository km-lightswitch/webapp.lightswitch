class CredentialsController < ApplicationController

  def new
    @credential = Credential.new
  end

  def index
    @credentials = Credential.all
  end

  def create
    @credential = Credential.new(credential_params)

    if @credential.save
      redirect_to action: 'show', id: @credential.id
    else
      render 'new'
    end
  end

  def show
    @credential = Credential.find(params[:id])
  end

  private
    def credential_params
      params.require(:credential).permit(:name, :access_key_id, :secret_access_key)
    end

end
