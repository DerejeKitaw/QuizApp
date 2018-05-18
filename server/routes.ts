import * as express from 'express';
import ParticipantCtrl from './controllers/participant';
import Participant from './models/participant';

export default function setRoutes(app) {

  const router = express.Router();


  const participantCtrl = new ParticipantCtrl();


  // Participants
  router.route('/insertParticipant').post(participantCtrl.register);
  // router.route('/participants').get(participantCtrl.getAll);
  // router.route('/participants/count').get(participantCtrl.count);
  // router.route('/participant').post(participantCtrl.insert);
  // router.route('/participant/:id').get(participantCtrl.get);
  // router.route('/participant/:id').put(participantCtrl.update);
  // router.route('/participant/:id').delete(participantCtrl.delete);

  // Apply the routes to our route with the prefix /api
  app.use('/api', router);
}
