const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mock-server/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const users = router.db.get('login').value();

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (user) {
    res.json({ token: user.token, user: user.user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

server.use('/api', router);

server.listen(3000, () => {
  console.log('Mock API running on http://localhost:3000');
});
