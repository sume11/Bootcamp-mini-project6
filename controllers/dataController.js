exports.greeting = (req, res) => {
  const hour = new Date().getHours();
  const greet = hour < 12 ? "Good Morning" : "Good Afternoon";

  res.json({
    greeting: greet,
    time: new Date().toLocaleTimeString()
  });
};
exports.receiveData = (req, res) => {
  res.json({ receivedData: req.body });
};
