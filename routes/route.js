const QNA = require("../models/QNA")
const express = require("express")
const router = express.Router()

const getAllQuestions = async (req, res) => {
  const questions = await QNA.find()
  res.send(questions)
}

const postNewQuestion = async (req, res) => {
  const newQuestion = req.body.question
  const addedQuestion = await QNA.create({
    question: newQuestion,
  })
  res.send(addedQuestion)
}

const getSingleQuestion = async (req, res) => {
  const { id } = req.params
  const singleQuestion = await QNA.findById(id)
  res.send(singleQuestion)
}

const postNewComment = async (req, res) => {
  const { id } = req.params
  const { comments, upvotes, downvotes } = req.body
  const singleQuestion = await QNA.findById(id)
  if (comments) {
    singleQuestion.comments.push(comments)
    await singleQuestion.save()
    res.send(singleQuestion)
  }
  if (upvotes) {
    singleQuestion.upvotes++
    await singleQuestion.save()
    console.log(singleQuestion)
    res.send(singleQuestion)
  }
  if (downvotes) {
    singleQuestion.downvotes++
    await singleQuestion.save()
    res.send(singleQuestion)
  }
}

router.get("/questions", getAllQuestions)
router.get("/questions/:id", getSingleQuestion)
router.post("/questions", postNewQuestion)
router.post("/questions/:id", postNewComment)

module.exports = router
