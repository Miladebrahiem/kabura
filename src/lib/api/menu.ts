import { graphqlClient } from '../graphql/client';
import { GET_FOOTER_MENU, GET_MAIN_MENU } from '../graphql/queries/menu';
import type { MenuResponse, MenuItem } from '../graphql/types/menu';

export async function getFooterMenu(): Promise<MenuItem[]> {
  try {
    const data = await graphqlClient.request<MenuResponse>(GET_FOOTER_MENU);
    return data.menu.menuItems.nodes;
  } catch (error) {
    console.error('Error fetching footer menu:', error);
    throw error;
  }
}

export async function getMainMenu(): Promise<MenuItem[]> {
  try {
    const data = await graphqlClient.request<MenuResponse>(GET_MAIN_MENU);
    return data.menu.menuItems.nodes;
  } catch (error) {
    console.error('Error fetching main menu:', error);
    throw error;
  }
}