import express from 'express';
import multer from 'multer';
import fs from 'fs';

const upload = multer({ dest: 'uploads' });

const router = express.Router();

router.post('/', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(422).json({
      error: 'File needs to be provided.',
    });
  }

  const mime = req.file.mimetype;
  if (mime.split('/')[0] !== 'image') {
    fs.unlink(req.file.path);

    return res.status(422).json({
      error: 'File needs to be an image.',
    });
  }

  const maxSize = req.app.fileSize;
  const fileSize = req.file.size;
  if (fileSize > maxSize) {
    fs.unlink(req.file.path);

    return res.status(422).json({
      error: `Image needs to be smaller than ${maxSize} bytes.`,
    });
  }

  // ********************
  // TODO: Upload to IPFS
  // ********************

  const seconds = 3;
  const waitTill = new Date(new Date().getTime() + (seconds * 1000));
  while (waitTill > new Date()) { /* */ }

  fs.unlink(req.file.path);
  return res.json({
    hash: req.file.filename,
  });
});

module.exports = router;
