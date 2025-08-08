export const ADD_ARRAY = "ADD_ARRAY";

export const addToAction = (query = "whiteBuffalo") => {
  return (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore recupero album");
        }
      })
      .then((data) => {
        dispatch({ type: ADD_ARRAY, payload: data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
