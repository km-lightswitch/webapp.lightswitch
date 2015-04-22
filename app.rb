require 'sinatra'

configure do
  set :public_folder, Proc.new { File.join(root, "public") }
end

get '/organisations/1/instances' do
  '[{
     "organisation_id": 1,
     "name": "web-1",
     "instance_id": "i-723afe12",
     "cloud_id": 1,
     "cloud_name": "aws",
     "location_id": 1,
     "location_name": "eu-west-1",
     "state": "up",
     "state_at": "2015-04-19T12:59:23+00:00",
     "schedule_id": 1,
     "schedule_description": "Up daily starting 9:00 AM IST"
    },
    {
     "organisation_id": 1,
     "name": "mongo-1",
     "instance_id": "i-x93afe12",
     "cloud_id": 1,
     "cloud_name": "aws",
     "location_id": 1,
     "location_name": "eu-west-1",
     "state": "down",
     "state_at": "2015-04-19T10:52:23+00:00",
     "schedule_id": 1,
     "schedule_description": "Up daily starting 3:30 AM IST"
   }
  ]'
end