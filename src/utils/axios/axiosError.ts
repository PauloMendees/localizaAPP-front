import messages from "../../config/routes/api/messages";
import { CustomAxiosError } from "./types";

export function handleAxiosError(error: unknown) {
  const { response } = messages;
  let messageError = "";
  const typedError = error as CustomAxiosError;
  const responseData = typedError.response?.data;

  const responseError = (!!responseData && responseData.error) as string;
  if (responseError) {
    messageError = responseError;
  } else {
    messageError = response.error.default;
  }

  return { messageError };
}