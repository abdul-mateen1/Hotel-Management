// import { createContext, useContext, useState, useEffect, useCallback} from "react";
// import { myAccess } from "@/services/authService";


// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {

//     const [user, setUser] = useState(null);
//     const [menus, setMenus] = useState([]);
//     const [permissions, setPermissions] = useState([]);

//     const [loading, setLoading] = useState(true);

//     const setAccess = (accessData) => {
//         setUser({
//             userId: accessData.userId,
//             roleId: accessData.roleId,
//             roleName: accessData.roleName
//         });

//         setMenus(accessData.menus || []);
//         setPermissions(accessData.permissions || []);
//     };
//     const hasPermission = (permissionCode) => {
//         return permissions.some(
//             p => p.permissionCode === permissionCode
//         );
//     };
//     const logout =() => {
//         localStorage.removeItem("token");
//         setUser(null);
//         setMenus([]);
//         setPermissions([]);
//     };
//     return(
//         <AuthContext.Provider value={{
//             user, 
//             menus, 
//             permissions,
//             setAccess,
//             hasPermission,
//             logout

//         }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
// export const useAuth  = () => useContext(AuthContext);















import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback
} from "react";

import { myAccess } from "@/services/authService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [menus, setMenus] = useState([]);
    const [permissions, setPermissions] = useState([]);

    // Prevent dashboard from rendering before access is restored
    const [loading, setLoading] = useState(true);

    const setAccess = useCallback((accessData) => {
        setUser({
            userId: accessData.userId,
            roleId: accessData.roleId,
            roleName: accessData.roleName
        });

        setMenus(accessData.menus || []);
        setPermissions(accessData.permissions || []);
    }, []);

    // Restore authentication when application starts
    useEffect(() => {

        const restoreAccess = async () => {

            const token = localStorage.getItem("token");

            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await myAccess();

                setAccess(response.data);

            } catch (error) {

                console.error("Failed to restore user access:", error);

                // Invalid/expired token or unavailable access
                if (error.response?.status === 401 ||
                    error.response?.status === 403) {

                    localStorage.removeItem("token");
                    localStorage.removeItem("role");
                }

                setUser(null);
                setMenus([]);
                setPermissions([]);

            } finally {
                setLoading(false);
            }
        };

        restoreAccess();

    }, [setAccess]);

    const hasPermission = (permissionCode) => {
        return permissions.some(
            p => p.permissionCode === permissionCode
        );
    };

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");

        setUser(null);
        setMenus([]);
        setPermissions([]);
    };

    return (
        <AuthContext.Provider value={{
            user,
            menus,
            permissions,
            loading,
            setAccess,
            hasPermission,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
};
