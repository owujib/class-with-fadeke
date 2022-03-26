const router = require('express').Router();

router.get('/register', (req, res, next) => {
  res.render('users/register.ejs', {
    title: 'Register',
    header: 'Create an Account with us',
  });
});

router.post('/register-post', (req, res, next) => {
  console.log(req.body);
  res.redirect('/login');
});

module.exports = router;
