CREATE TABLE workouts (
   Id   SERIAL PRIMARY KEY,
   Tiltle    VARCHAR(100),
   Loads   int,
   Reps  int
);

INSERT INTO workouts (Tiltle, Loads, Reps) VALUES ('Biceps', 12, 3);
INSERT INTO workouts (Tiltle, Loads, Reps) VALUES ('Triceps', 3, 12);
INSERT INTO workouts (Tiltle, Loads, Reps) VALUES ('Push up', 4, 15);