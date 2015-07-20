require_relative '../../app/models/profile'

class CredentialsController < ApplicationController

  def new
    @credential = Credential.new
  end

  def index
    @credentials = Credential.all
  end

  def create
    profile = Profile.new(user_id: @current_user.id)
    profile.save

    @credential = Credential.new(credential_params)
    @credential.profile_id = profile.id

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
