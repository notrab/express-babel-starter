import {Router} from 'express';
import bodyParser from 'body-parser';

const router = Router();
const jsonParser = bodyParser.json();
const encodedParser = bodyParser.urlencoded({extended: false});

router.route('/')
  .get(jsonParser, (req, res) => {
    res.json([]);
  })
  .post(encodedParser, (req, res) => {
    const {username, password} = req.body;

    res.json(req.body);
  });

export default router;
