const { Feedback } = require('../database')

module.exports = {
  async index(req, res) {
    try {
      let feedbacks = await Feedback.findAll(
        {
          order: ['createdAt'],
          limit: 20
        }
        )
      return res.json(feedbacks)
    } catch (err) {
      res.status(500).json({error: err.message})
    }
  },
  async registerFeedback(req, res) {
    try {
      if(req.body.rate < 1 || req.body.rate > 5){
        return res.json({message: "Rate out of range"})
      }
      let feedback = await Feedback.create(req.body)
      return res.json(feedback)
    } catch (err) {
      return res.status(500)
    }
  },

  async editFeedback(req, res) {
    try {
      await Feedback.update(req.body, {
        where: { id: req.params.feedbackId }
      });
      return res.json({success: 'Feedback was modificated'})
    } catch (err) {
      return res.sendStatus(500)
    }
  },

  async deleteFeedback(req, res) {
    try {
      await Feedback.destroy({where: {id: req.params.feedbackId}})
      return res.json({success: 'Feedback was deleted'})
    } catch (error) {
      return res.sendStatus(500)
    }
  }
};
