const { Router } = require("express");
//const { route } = require('./countries.routes');
const { Country, Activity } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    const activityCreated = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    countries.forEach(async (c) => {
      const countryActivity = await Country.findOne({
        where: {
          name: c,
        },
      });
      await activityCreated.addCountry(countryActivity);
    });
    res.status(200).send("Activity creada exitosamente");
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
