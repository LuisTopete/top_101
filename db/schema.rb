# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_19_210000) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "arists", force: :cascade do |t|
    t.string "artist_name"
    t.text "desc"
    t.string "plays_artist"
    t.bigint "billboard_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["billboard_id"], name: "index_arists_on_billboard_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "artist_name"
    t.string "desc"
    t.string "plays_artist"
    t.bigint "billboard_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["billboard_id"], name: "index_artists_on_billboard_id"
  end

  create_table "billboards", force: :cascade do |t|
    t.string "artist_name"
    t.string "genre"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "arists", "billboards"
  add_foreign_key "artists", "billboards"
end
