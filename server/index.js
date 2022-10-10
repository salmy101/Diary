const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a entry

app.post("/entries", async (req, res) => {
  try {
    const { user_id, title, text } = req.body;
    const newEntry = await pool.query(
      "INSERT INTO entries ( user_id ,title, text) VALUES($1, $2, $3) RETURNING *",
      [user_id, title, text]
    );

    res.json(newEntry.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all entries

app.get("/entries", async (req, res) => {
  try {
    const allEntries = await pool.query("SELECT * FROM entries");
    res.json(allEntries.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a entry

app.get("/entries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await pool.query("SELECT * FROM entries WHERE id = $1", [
      id
    ]);

    res.json(entry.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a entry

app.put("/entries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;
    const updateEntry = await pool.query(
      `UPDATE entries 
       SET title = $1, text = $2 
       WHERE id = $3`,
      [title, text, id]
    );

    res.json("Entry was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

app.delete("/entries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEntry = await pool.query("DELETE FROM entries WHERE id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});


// USERS
//get all users

app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});