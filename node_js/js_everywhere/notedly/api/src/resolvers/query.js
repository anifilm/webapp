const { models } = require('mongoose');

module.exports = {
  notes: async (parent, args, { models }) => {
    return await models.Note.find();
  },
  note: async (parent, args) => {
    return await models.Note.findById(args.id);
  },
};
