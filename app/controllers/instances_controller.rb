require 'lightswitch/cloud'
require_relative '../../app/models/credential'

class InstancesController < ApplicationController

  DEFAULT_REGION_NAME = 'eu-west-1'

  def discover
    @credential = Credential.first
    credential_hash = {access_key_id: @credential.access_key_id, secret_access_key: @credential.secret_access_key}
    @instance_info = []
    unless @cloud_client
      @cloud_client = Lightswitch::Cloud.new(credential_hash)
      @instance_info = @cloud_client.list_instances(DEFAULT_REGION_NAME)
    end
 end

end
