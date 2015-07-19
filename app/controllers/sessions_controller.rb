class SessionsController < ApplicationController

  skip_before_action :require_login, except: [:destroy]

  def new
  end

  def create
    if login(params[:email], params[:password])
      flash[:success] = 'Welcome back!'
      redirect_to root_path
    else
      flash.now[:warning] = 'You entered an incorrect e-mail and/or password '
      render 'new'
    end
  end

  def destroy
    logout
    flash[:success] = 'You have been logged out'
    redirect_back_or_to log_in_path
  end

end
