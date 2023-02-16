const Post = require('../models/postSchema');

async function getPosts(req, res) {
  if (req.query.creatorId)
    Post.find(
      {
        creatorId: req.query.creatorId,
      },
      (err, posts) => {
        if (err) {
          return res.status(500).send(err);
        } else {
          return res.json(posts);
        }
      }
    );
}
async function getPost(req, res) {
  Post.findOne({ url: req.params.url }, (err, post) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(post);
    }
  });
}

async function addPost(req, res) {
  try {
    const { title, text, password, creatorId } = req.body;

    const textDoc = new Post({ title, text, password, creatorId });
    await textDoc.save();
    const fileUrl = `${textDoc._id}`;
    textDoc.url = fileUrl;
    await textDoc.save();
    res.json({ fileUrl });
  } catch (err) {
    res.status(500).json({ message: 'Error saving text to database' });
  }
}
async function deletePost(req, res) {
  Post.findByIdAndRemove(req.params.url, (err, post) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: 'Post deleted successfully' });
    }
  });
}
 function updatePost(req, res) {
  const { text, title, password } = req.body;
 return Post.findByIdAndUpdate(
    req.body._id,
    { text, title, password },
    (err, post) => {
      if (err) {
       return res.status(500).send(err);
      } else {
       return res.json(post._id);
      }
    }
  );
}

module.exports = { getPost, addPost, deletePost, getPosts, updatePost };
