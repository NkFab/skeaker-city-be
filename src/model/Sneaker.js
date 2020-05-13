import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

const Sneaker = new Schema({
  box_condition: String,
  brand_name: String,
  category: Array,
  collection_slugs: Array,
  color: String,
  designer: String,
  details: String,
  gender: Array,
  grid_picture_url: String,
  has_picture: Boolean,
  has_stock: Boolean,
  id: Number,
  keywords: Array,
  main_picture_url: Array,
  midsole: String,
  name: String,
  nickname: String,
  original_picture_url: String,
  product_template_id: Number,
  release_date: String,
  release_date_unix: String,
  release_year: Number,
  retail_price_cents: Number,
  shoe_condition: String
});

Sneaker.plugin(mongoosePaginate);

export default model("sneakers", Sneaker);
