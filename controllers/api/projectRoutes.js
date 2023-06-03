const router = require('express').Router();
const { Project, Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User }]
    })

    const post = postData.get({ plain: true });

    res.render('update', {
      ...user,
      ...post,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/comment', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ccontent: req.body.comment,
      user_id: req.session.user_id,
      post_id: req.body.title
    });

    res.status(200).json(newComment);

  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});

router.put('/', withAuth, async (req, res) => {
  try {
    const updatePost = await Post.update({ title: req.body.title, content: req.body.content }, {
      where: {
        id: req.body.id
      }
    });

    res.status(200).json(updatePost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
