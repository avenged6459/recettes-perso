const router = require("express").Router();
const cardController = require("../controllers/card.controller");
const multer = require("multer");
const upload = multer();

router.get("/", cardController.readCard);
router.post("/", upload.single("file"), cardController.createCard);
router.put("/:id", cardController.updateCard);
router.delete("/:id", cardController.deleteCard);
router.post("/", upload.single("file"), cardController.createCard);
router.patch("/like-card/:id", cardController.likeCard);
router.patch("/unlike-card/:id", cardController.unlikeCard);

// comments
router.patch("/comment-card/:id", cardController.commentCard);
router.patch("/edit-comment-card/:id", cardController.editCommentCard);
router.patch("/delete-comment-card/:id", cardController.deleteCommentCard);

module.exports = router;
