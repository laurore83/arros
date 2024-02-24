
 use arros;
CREATE TABLE
    user (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE,
        password VARCHAR(255),  
        is_admin BOOLEAN DEFAULT 0
    );

     CREATE TABLE
  new (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
       url int,
    );
  CREATE TABLE
  press (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
       url int
    );
    CREATE TABLE
  site (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        text VARCHAR(255),
        img BLOB,
        press_id INT,
        new_id INT
      
    );
   