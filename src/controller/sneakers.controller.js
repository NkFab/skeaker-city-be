import Sneaker from "../model/Sneaker";

class SkeakersController {
  static async getAll(req, res) {
    try {
      const { page = 1 } = req.query;

      const options = {
        select: [
          "brand_name",
          "name",
          "retail_price_cents",
          "grid_picture_url",
          "release_date"
        ],
        sort: { release_date: "ASC" },
        page,
        limit: 10
      };

      const sneakers = await Sneaker.paginate({}, options);

      return res.status(200).json({ sneakers });
    } catch (error) {
      return res.status(500).json({ ...error });
    }
  }

  static async getOne(req, res) {
    const { id } = req.params;

    try {
      const sneaker = await Sneaker.findOne({ _id: id }).select([
        "box_condition",
        "brand_name",
        "color",
        "designer",
        "details",
        "main_picture_url",
        "name",
        "nickname",
        "release_year",
        "retail_price_cents",
        "size_range",
        "shoe_condition"
      ]);

      if (!sneaker) {
        return res.status(404).json({ message: "Not found" });
      }

      return res.status(200).json({ sneaker });
    } catch (error) {
      switch (error.path) {
        case "_id":
          return res.status(400).json({ message: "Invalid id" });
        default:
          return res.status(500).json({ ...error });
      }
    }
  }
}

export default SkeakersController;
