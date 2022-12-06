class CreateBillboards < ActiveRecord::Migration[7.0]
  def change
    create_table :billboards do |t|
      t.string :artist_name
      t.string :genre

      t.timestamps
    end
  end
end
