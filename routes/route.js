const User = require("../model/user");

// * Getting All users
exports.allusers = async (req, res) => {
  try {
    const aliens = await User.find((err, user) => {
      if (err) {
        res.status(400).json({ msg: "No user Found" });
      }

      res.json(user);
    });
  } catch (error) {
    console.log("Error in Users Fetching");
  }
};

// * Adding users
exports.addUser = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      technology: req.body.technology,
      subscription: req.body.subscription,
    });

    await user.save((err, user) => {
      if (err) {
        res.status(400).json({ msg: "user not saved" });
      }

      res.json({
        name: user.name,
        email: user.email,
        technology: user.technology,
        subscription: user.subscription,
      });
    });
  } catch (error) {
    console.log("Error Creating User " + error);
  }
};

// * Updating Users
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const updateUser = req.body;

    if (user) {
      user.name = updateUser.name ? updateUser.name : user.name;
      user.email = updateUser.email ? updateUser.email : user.email;
      user.technology = updateUser.technology
        ? updateUser.technology
        : user.technology;
      user.subscription = updateUser.subscription
        ? updateUser.subscription
        : user.subscription;

      user.save(() => {
        res.json({
          name: user.name,
          email: user.email,
          technology: user.technology,
          subscription: user.subscription,
        });
      });
    } else {
      res.status(400).json({ msg: "User Not Updated" });
    }
  } catch (error) {
    console.log("Error in User Updating " + error);
  }
};

// * Deleting Users
exports.deleteUser = async (req, res) => {
  try {
    const user = User.findById(req.params.id);

    await user.deleteOne();
    res.json({ msg: "User Deleted" });
  } catch (error) {
    console.log("Error in Deleting User " + error);
  }
};
