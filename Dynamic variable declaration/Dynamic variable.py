
# Student Grading System Using Dynamic Variables

# Step 1: Create a dictionary to store student data dynamically
students = {}

# Step 2: Add students and their grades dynamically
def add_student(name, grade):
    students[name] = grade
    print(f"Added {name} with grade {grade}.")

# Step 3: Retrieve a student's grade
def get_grade(name):
    if name in students:
        print(f"{name}'s grade is {students[name]}.")
    else:
        print(f"Student {name} not found.")

# Step 4: Calculate the average grade of all students
def calculate_average():
    if not students:
        print("No students added yet.")
        return
    total = sum(students.values())
    average = total / len(students)
    print(f"Average grade of all students: {average:.2f}")

# Step 5: Display all students and their grades
def display_students():
    if not students:
        print("No students added yet.")
        return
    print("Student Grades:")
    for name, grade in students.items():
        print(f"{name}: {grade}")

# Step 6: Main program
def main():
    # Add students dynamically
    add_student("fennjoy", 85)
    add_student("alan", 90)
    add_student("shana", 78)

    # Retrieve a student's grade
    get_grade("fennjoy")
    get_grade("alan")  # Student not found

    # Display all students
    display_students()

    # Calculate the average grade
    calculate_average()

# Run the program
if __name__ == "__main__":
    main()