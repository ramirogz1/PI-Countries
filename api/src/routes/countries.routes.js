const { Router } = require("express");
const { getDbInfo } = require("../controllers/countriesControllers");
const { Country, Activity } = require("../db");
//const Activity = require("../models/Activity");

const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const countriesTotal = await getDbInfo();
    if (name) {
      const countriesName = countriesTotal.filter((c) =>
        c.name.toLowerCase().includes(name.toLocaleLowerCase())
      );
      countriesName.length
        ? res.status(200).send(countriesName)
        : res.status(404).send("No se encuentra el pais solicitado");
    } else {
      res.status(200).send(countriesTotal);
    }
  } catch (error) {
    console.log("Error en la ruta get /countries: ", error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const countryId = await Country.findByPk(id, {
      include: Activity,
    });
    countryId
      ? res.status(200).send(countryId)
      : res.status(404).send("id no encontrado");
  } catch (error) {
    console.log("error en / id", error);
  }
});

module.exports = router;
