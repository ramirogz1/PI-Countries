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

router.get('/',async(req,res)=> {
  try {
    const activities = await Activity.findAll({
      attributes: ['id','name','difficulty','duration','season'],
      include: Country,
    })
    res.status(200).send(activities)
  } catch (error) {
    console.log('error en /act',error)
  }
})

module.exports = router;
