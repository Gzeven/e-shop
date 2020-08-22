const INITIAL_STATE = {
  sections: [
    {
      title: "Films",
      imageUrl:
        "https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
      id: 1,
      linkUrl: "winkel/films",
    },
    {
      title: "Games",
      imageUrl:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
      id: 2,
      linkUrl: "winkel/games",
    },
    {
      title: "Boeken",
      imageUrl:
        "https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
      id: 3,
      linkUrl: "winkel/boeken",
    },
    {
      title: "Computer",
      imageUrl:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",

      id: 4,
      linkUrl: "winkel/computer",
    },
    {
      title: "Kleding",
      imageUrl:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",

      id: 5,
      linkUrl: "winkel/kleding",
    },
    {
      title: "Schoenen",
      imageUrl:
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      id: 6,
      linkUrl: "winkel/schoenen",
    },
    {
      title: "Wonen",
      imageUrl:
        "https://images.unsplash.com/photo-1551516594-56cb78394645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=716&q=80",
      size: "large",
      id: 7,
      linkUrl: "winkel/wonen",
    },
    {
      title: "Tuin",
      imageUrl:
        "https://images.unsplash.com/photo-1523301551780-cd17359a95d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
      size: "large",
      id: 8,
      linkUrl: "winkel/tuin",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
