export interface MenuItem {
  id: string;
  label: string;
  path: string;
  url: string;
  parentId: string | null;
  childItems?: {
    nodes: MenuItem[];
  };
}

export interface MenuResponse {
  menu: {
    menuItems: {
      nodes: MenuItem[];
    };
  };
}