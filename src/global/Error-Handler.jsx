import { useSnackbar } from "notistack";
import GLOBAL from "./Global-Variables";

export const useErrorHandler = () => {
    const { enqueueSnackbar } = useSnackbar();
    const handleError = (err) => {
        if (err.response) {
            if (err.response.status === 400) {
                enqueueSnackbar(err.response.data?.Message || GLOBAL.SOMETHING_WENT_WRONG, { variant: "error", autoHideDuration: 3000 });
            } else if (err.response.status === 500) {
                enqueueSnackbar(err.response.data?.error || GLOBAL.SERVER_ERROR, { variant: "error", autoHideDuration: 3000 });
            } else {
                enqueueSnackbar(GLOBAL.SOMETHING_WENT_WRONG, { variant: "info", autoHideDuration: 3000 });
            }
        } else if (err.message) {
            enqueueSnackbar(err.message, { variant: "error", autoHideDuration: 4000 });
        } else if (err.request) {
            enqueueSnackbar(GLOBAL.RESPONSE_ERRROR, { variant: "error", autoHideDuration: 3000 });
        } else {
            if (err.message === 'Network Error' && err?.response?.status === 0) {
                enqueueSnackbar(GLOBAL.CROSS_ORIGIN_ERROR, { variant: "error", autoHideDuration: 4000 });
            } else {
                enqueueSnackbar(err.message || GLOBAL.SOMETHING_WENT_WRONG, { variant: "error", autoHideDuration: 4000 });
            }
        }
    }
    return { handleError };
}