CREATE TABLE workouts (
   Id   SERIAL PRIMARY KEY,
   Title    VARCHAR(100),
   Loads   int,
   Reps  int
);

INSERT INTO workouts (Title, Loads, Reps) VALUES ('Biceps', 12, 3);