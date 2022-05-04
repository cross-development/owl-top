// Core
import { createContext, ReactNode, useState } from 'react';
// Interfaces and types
import { MenuItem } from 'types/menu.interface';
import { TopLevelCategory } from 'types/page.interface';

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

const defaultContext = { menu: [], firstCategory: TopLevelCategory.Courses };

export const AppContext = createContext<IAppContext>(defaultContext);

interface IAppContextProvider extends IAppContext {
  children: ReactNode;
}

export const AppContextProvider = ({ children, menu, firstCategory }: IAppContextProvider): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  const setMenu = (newMenu: MenuItem[]) => setMenuState(newMenu);

  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>{children}</AppContext.Provider>
  );
};
