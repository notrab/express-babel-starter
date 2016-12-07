import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'Hello Express 👋'
  });
})

router.get('/about-us', (req, res) => {
  res.render('pages/about', {
    title: 'About us'
  });
})

export default router;
