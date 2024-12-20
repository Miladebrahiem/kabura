export const GET_FOOTER_MENU = `
  query GetFooterMenu {
    menu(id: "2", idType: DATABASE_ID) {
      menuItems {
        nodes {
          id
          label
          path
          url
        }
      }
    }
  }
`;

export const GET_MAIN_MENU = `
  query GetMainMenu {
    menu(id: "4", idType: DATABASE_ID) {
      menuItems(where: { parentId: "0" }) {
        nodes {
          id
          label
          path
          url
          childItems {
            nodes {
              id
              label
              path
              url
            }
          }
        }
      }
    }
  }
`;