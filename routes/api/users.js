const express = require('express');
const userCtrl = require('../../controllers/user');
const authCtrl = require('../../controllers/auth');
const router = express.Router();

// USER ROUTES
router.route('/').post(userCtrl.create).get(userCtrl.list);

router
  .route('/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

// TRANSPORT ROUTES
router
  .route('/:userId/transports')
  .get(authCtrl.requireSignin, userCtrl.listTrans)
  .post(
    authCtrl.requireSignin,
    authCtrl.hasAuthorization,
    userCtrl.createTrans
  );

router
  .route('/:userId/transports/:transId')
  .get(authCtrl.requireSignin, userCtrl.singleTrans)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.updateTrans)
  .delete(userCtrl.removeTrans);

router.param('userId', userCtrl.userByID);
router.param('transId', userCtrl.transByID);

module.exports = router;
