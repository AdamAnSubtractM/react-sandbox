const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: check if they are logged in
    
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info);

    return item;
  },
  updateItem(parent, args, ctx, info) {
    // first take a copy of the updates
    const updates = { ...args };
    // remove the ID from the updates (since this is something you shouldn't && can't update)
    delete updates.id;
    // run the updated method
    return ctx.db.mutation.updateItem({
      data: updates,
      where: {
        id: args.id
      }
    }, info);
  }
};

module.exports = Mutations;
