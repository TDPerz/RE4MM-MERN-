import { createContext } from "react";

export const DataContext = createContext()

export function DataProvider(props) {

    return (
        <DataContext.Provider value={{}}>
            {props.children}
        </DataContext.Provider>
    )
}