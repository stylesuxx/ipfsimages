import ipfsAPI from 'ipfs-api';
import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.${file.mimetype.split('/')[1]}`);
  },
});

const upload = multer({ storage });

const ipfs = ipfsAPI({
  host: 'localhost',
  port: 5001,
  protocol: 'http',
});

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

  const data = fs.readFileSync(req.file.path);
  return ipfs.add(data, (err, files) => {
    fs.unlink(req.file.path);
    if (files) {
      return res.json({
        hash: files[0].hash,
      });
    }

    return res.status(500).json({
      error: err,
    });
  });
});

module.exports = router;
