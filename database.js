// database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./items.db'); // Создайте базу данных с именем items.db

db.serialize(() => {
  // Создание таблицы items
  db.run(`CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY,
    title TEXT,
    img TEXT,
    desc TEXT,
    category TEXT,
    price INTEGER
  )`);

  // Заполнение таблицы данными
  const insert = db.prepare(`INSERT INTO items (id, title, img, desc, category, price) VALUES (?, ?, ?, ?, ?, ?)`);
  
  for (let i = 1; i <= 40; i++) {
    const category = `cat${(i % 6) + 1}`; // Категории от cat1 до cat6
    const price = Math.floor(Math.random() * (2000 - 500 + 1)) + 500; // Случайная цена от 500 до 2000
    insert.run(i, `Item ${i}`, `img${i}.jpg`, `Desc ${i}`, category, price);
  }

  insert.finalize();
});

db.close();
