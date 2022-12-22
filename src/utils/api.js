import axios from "axios";
// for VITE JS WE HAVE TO USE TO GET ENV DATA import.meta.env.VITE_SOME_VALUES
const params = {
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_REACT_APP_API_URL,
  },
};

// console.log(import.meta.env.VITE_SOME_KEY + " hello");
export const dataFetching = async (url) => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_BASE_URL + url,
      params
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
