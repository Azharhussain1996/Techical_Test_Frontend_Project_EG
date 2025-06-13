import React, { createContext, useState } from "react";
import userService from "services/userService";
import { useErrorHandler } from "./global/Error-Handler";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { handleError } = useErrorHandler();

    const fetchNotifications = (userId, contractorCompanyId) => {
        setLoading(true);
        userService
            .GetNotifications({ userId, contractorCompanyId })
            .then((res) => {
                setNotification(res.data.Data);
            })
            .catch((err) => {
                setLoading(false);
                handleError(err);
                setError(err.message);
            })
            .then(() => setLoading(false));
    };

    return (
        <NotificationContext.Provider value={{ notification, loading, error, fetchNotifications }}>
            {children}
        </NotificationContext.Provider>
    );
};
