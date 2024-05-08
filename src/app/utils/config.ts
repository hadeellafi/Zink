export const Config = {
    Api: {
      bit: {
        list: '/bits',
        details: '/bits/:id',
        create: '/bits',
        update: '/bits/:id',
        delete: '/bits/:id',
      },
      ingredient: {
        list: '/bits/:id/ingredients',
        details: '/bits/:id/ingredients/:iid',
        create: '/bits/:id/ingredients',
        update: '/bits/:id/ingredients/:iid',
        delete: '/bits/:id/ingredients/:iid'
      },
      piece: {
        list: '/pieces',
        details: '/pieces/:id',
        create: '/pieces',
        update: '/pieces/:id',
        delete: '/pieces/:id'
      }
    }
  };
  