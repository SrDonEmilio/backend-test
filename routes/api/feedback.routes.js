const router = require('express').Router();

const { feedbackController } = require('../../controllers');

router.get('/', feedbackController.index);
router.post('/', feedbackController.registerFeedback);
router.put('/:feedbackId', feedbackController.editFeedback);
router.delete(':/feedbackId', feedbackController.deleteFeedback)
module.exports = router;
