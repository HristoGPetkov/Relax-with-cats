import { GET_PICS_INIT, GET_PICS_SUCCESS, GET_PICS_FAIL } from "./actinTypes";
import { unsplash } from "../../utils/utils";

export const getPicsFail = (error) => ({ type: GET_PICS_FAIL, error });
export const getPicsInit = () => ({ type: GET_PICS_INIT });
export const getPicsSuccess = (pictures) => ({
  type: GET_PICS_SUCCESS,
  pictures,
});
export const getPictures = (count = 20) => async (dispatch) => {
  dispatch(getPicsInit());

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=cat&count=${count}`,
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

    console.log(result);

    if (result.errors) throw new Error(result.errors[0]);

    const pictures = result.map((item) => {
      const { description, alt_description, user } = item;
      const url = item.urls.regular;

      return { url, description, alt_description, user };
    });

    dispatch(getPicsSuccess(pictures));

    return pictures;
  } catch (error) {
    console.log(error);
    dispatch(getPicsFail(error));
  }
};
