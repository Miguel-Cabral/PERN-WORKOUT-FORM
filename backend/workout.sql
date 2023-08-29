CREATE TABLE workouts (
   Id   SERIAL PRIMARY KEY,
   Tiltle    VARCHAR(100),
   Loads   int,
   Reps  int
);

INSERT INTO workouts (Tiltle, Loads, Reps) VALUES ('Biceps', 12, 3);
INSERT INTO workouts (Tiltle, Loads, Reps) VALUES ('Triceps', 3, 12);
INSERT INTO workouts (Tiltle, Loads, Reps) VALUES ('Push up', 4, 15);
INSERT INTO workouts (Tiltle, Loads, Reps, WorkoutDate, Series)
VALUES ('Legs', 100, 10, CURRENT_TIMESTAMP, 3);

ALTER TABLE workouts
ADD COLUMN series INTEGER;

ALTER TABLE workouts
DROP COLUMN workoutDate;

ALTER TABLE workouts
ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
