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
      return await Sneaker.paginate({}, options)
        .then(sneakers => {
          res.status(200).json({ sneakers });
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      return res.status(500).json({ ...error });
    }
  }
}

export default SkeakersController;
