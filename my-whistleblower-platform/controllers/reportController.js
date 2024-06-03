// controllers/reportController.js
const Report = require('../models/Report');

exports.submitReport = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newReport = new Report({
      title,
      description,
      user: req.user.id,
    });

    const report = await newReport.save();
    res.json(report);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ date: -1 });
    res.json(reports);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
