# Student Grade Management System Using Dynamic Multi-dimensional Arrays

# Step 1: Create a dictionary to store dynamic multi-dimensional arrays
students = {}

# Step 2: Add students and their grades dynamically
def add_student(name, grades):
    """
    Add a student and their grades to the system.
    :param name: Name of the student
    :param grades: List of grades (e.g., [85, 90, 78])
    """
    students[name] = grades
    print(f"Added {name} with grades: {grades}")

# Step 3: Calculate the average grade for a student
def calculate_average(name):
    """
    Calculate the average grade for a student.
    :param name: Name of the student
    """
    if name in students:
        grades = students[name]
        average = sum(grades) / len(grades)
        print(f"{name}'s average grade: {average:.2f}")
    else:
        print(f"Student {name} not found.")

# Step 4: Find the highest grade for a student
def find_highest_grade(name):
    """
    Find the highest grade for a student.
    :param name: Name of the student
    """
    if name in students:
        highest_grade = max(students[name])
        print(f"{name}'s highest grade: {highest_grade}")
    else:
        print(f"Student {name} not found.")

# Step 5: Display all students and their grades
def display_students():
    """
    Display all students and their grades.
    """
    if not students:
        print("No students added yet.")
        return
    print("Student Grades:")
    for name, grades in students.items():
        print(f"{name}: {grades}")

# Step 6: Main program
def main():
    # Add students and their grades dynamically
    add_student("fennjoy", [85, 90, 78])
    add_student("viyani", [92, 88, 91])
    add_student("alanjoy", [75, 80, 85])

    # Display all students
    display_students()

    # Calculate averages
    calculate_average("fennjoy")
    calculate_average("viyani")
    calculate_average("alan")

    # Find highest grades
    find_highest_grade("fennjoy")
    find_highest_grade("viyani")
    find_highest_grade("alan")

# Run the program
if __name__ == "__main__":
    main()
