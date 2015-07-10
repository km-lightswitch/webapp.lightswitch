class CreateCredentials < ActiveRecord::Migration
  def change
    create_table :credentials do |t|
      t.string :name
      t.string :access_key_id
      t.string :secret_access_key

      t.timestamps null: false
    end
  end
end
