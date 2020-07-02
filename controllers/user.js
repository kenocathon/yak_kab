const User = require('../models/User');
const Transport = require('../models/Transport');
const extend = require('lodash/extend');
const errorHandler = require('../helpers/dbErrorHandler');

module.exports = {
  create: async (req, res) => {
    const user = new User(req.body);
    try {
      await user.save();
      return res.status(200).json({
        message: 'Successfully signed up!',
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  },

  /**
   * Load user and append to req.
   */
  userByID: async (req, res, next, id) => {
    try {
      let user = await User.findById(id);
      if (!user)
        return res.status('400').json({
          error: 'User not found',
        });
      req.profile = user;
      next();
    } catch (err) {
      return res.status('400').json({
        error: 'Could not retrieve user',
      });
    }
  },

  read: (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    try {
      console.log(req.profile);
      return res.json(req.profile);
    } catch (error) {
      console.error(error);
    }
  },

  list: async (req, res) => {
    try {
      let users = await User.find().select(
        'firstName lastName email updated created'
      );
      res.json(users);
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  },

  update: async (req, res) => {
    try {
      let user = req.profile;
      user = extend(user, req.body);
      user.updated = Date.now();
      await user.save();
      user.hashed_password = undefined;
      user.salt = undefined;
      res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  },

  remove: async (req, res) => {
    try {
      let user = req.profile;
      let deletedUser = await user.remove();
      deletedUser.hashed_password = undefined;
      deletedUser.salt = undefined;
      res.json(deletedUser);
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  },

  // Control for Transports
  createTrans: async (req, res) => {
    const transport = new Transport(req.body);
    const user = req.profile;
    try {
      transport.user = user;
      await transport.save();
      user.listOfTransports.push(transport);
      await user.save();
      return res.status(200).json({
        message: 'Transport created successfully',
      });
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  },

  listTrans: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findById(userId).populate('listOfTransports');
      res.status(200).json(user.listOfTransports);
    } catch (err) {
      console.error(err);
    }
  },

  transByID: async (req, res, next, id) => {
    try {
      let transport = await Transport.findById(id);
      if (!transport) {
        return res.status(400).json({
          error: 'Transport not found, check Id',
        });
      }
      req.trans = transport;
      next();
    } catch (err) {
      return res.status(400).json({
        error: 'Could not retrieve transport by Id',
      });
    }
  },

  singleTrans: (req, res) => {
    return res.json(req.trans);
  },

  updateTrans: async (req, res) => {
    try {
      let transport = req.trans;
      transport = extend(transport, req.body);
      await transport.save();
      res.status(200).json(transport);
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  },

  removeTrans: async (req, res) => {
    try {
      let id = req.trans._id;
      let user = req.profile;
      let transArray = user.listOfTransports;
      const index = transArray.indexOf(id);
      if (index) {
        transArray.splice(index, 1);
      }
      await Transport.findByIdAndDelete(id);
      await user.save();
      res.json({
        msg: `transport deleted: ${id}`,
      });
    } catch (err) {
      console.error(err);
    }
  },
};
