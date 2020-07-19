import { GET_PICS_INIT, GET_PICS_SUCCESS, GET_PICS_FAIL } from "./actinTypes";
import { unsplash } from "../../utils/utils";

export const getPicsFail = (error) => ({ type: GET_PICS_FAIL, error });
export const getPicsInit = () => ({ type: GET_PICS_INIT });
export const getPicsSuccess = (pictures) => ({
  type: GET_PICS_SUCCESS,
  pictures,
});
export const getPictures = (page = 1, perPage = 10) => async (dispatch) => {
  dispatch(getPicsInit());

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=cat&page=${page}&per_page=${perPage}`,
      {
        method: "GET",
        headers: {
          "Accept-Version": "v1",
          Authorization: `Client-ID ${unsplash}`,
        },
      }
    );
    console.log(response);

    const result = await response.json();

    if (result.errors) throw new Error(result.errors[0]);

    console.log(result);

    const pictures = result.results.map((item) => {
      const { description, user } = item;
      const url = item.urls.regular;

      return { url, description, user };
    });

    dispatch(getPicsSuccess(pictures));

    console.log(pictures);
  } catch (error) {
    console.log(error);
    dispatch(getPicsFail(error));
  }
};
