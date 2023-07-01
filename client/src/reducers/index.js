const initialState = {
  countries: [],
  activities: [],
  allContries: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allContries: action.payload,
      };
    case "GET_ACTIVITIES":
      return {
        ...state,
        activity: action.payload,
      };
    case "FILTER_CONTINENTS":
      const allContries = state.allContries;
      const continentsFiltered =
        action.payload === "All"
          ? allContries
          : allContries.filter((c) => c.continents.includes(action.payload));
      return {
        ...state,
        countries: continentsFiltered,
      };
    case "FILTER_ACTIVITIES":
      const allContries2 = state.allContries;
      const activitiesFiltered =
        action.payload === "All"
          ? allContries2.filter((c) => c.activities.length > 0)
          : allContries2.filter((c) =>
             c.activities.find((el)=>el.name.toLowerCase()=== action.payload.toLowerCase())
            );
      return {
        ...state,
        countries: activitiesFiltered,
      };
      case 'ORDER_BY_NAME': 
      const sortedArrName = [...state.countries]
      action.payload === "asc"
        ? sortedArrName.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
              return -1;
            }
            return 0;
          })
        : sortedArrName.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
              return 1;
            }
            return 0;
          });

    return {
      ...state,
      countries: sortedArrName,
    };

    case 'ORDER_BY_POPULATION': 
    const sortedArrPopulation = [...state.countries]
      action.payload === "low"
        ? sortedArrPopulation.sort(function (a, b) {
            if (a.population > b.population) {
              return 1;
            }
            if (b.population > a.population) {
              return -1;
            }
            return 0;
          })
        : sortedArrPopulation.sort(function (a, b) {
            if (a.population > b.population) {
              return -1;
            }
            if (b.population> a.population) {
              return 1;
            }
            return 0;
          });

    return {
      ...state,
      countries: sortedArrPopulation,
    };

    default:
      return state;
  }
}

export default rootReducer;
