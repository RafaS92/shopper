export const initialState = {
  basket: [
    {
      id: "1234",
      title: " adfafds f a dfa f adfa a faeraehaerhf aafajdkfsdfja afdja ja da",
      price: 11.96,
      rating: 5,
      image:
        "https://s1.eestatic.com/2020/03/11/como/Coronavirus-Enfermedades_infecciosas-Infecciones-Mascotas-Como_hacer_473964995_147985150_1024x576.jpg",
    },
    {
      id: "1234",
      title: " adfafds f a dfa f adfa a faeraehaerhf aafajdkfsdfja afdja ja da",
      price: 11.96,
      rating: 5,
      image:
        "https://s1.eestatic.com/2020/03/11/como/Coronavirus-Enfermedades_infecciosas-Infecciones-Mascotas-Como_hacer_473964995_147985150_1024x576.jpg",
    },
    {
      id: "1234",
      title: " adfafds f a dfa f adfa a faeraehaerhf aafajdkfsdfja afdja ja da",
      price: 11.96,
      rating: 5,
      image:
        "https://s1.eestatic.com/2020/03/11/como/Coronavirus-Enfermedades_infecciosas-Infecciones-Mascotas-Como_hacer_473964995_147985150_1024x576.jpg",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      return { state };

    default:
      return state;
  }
};

export default reducer;
