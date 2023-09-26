# CGPA-Calculator

<a href="https://anonys6.github.io/CGPA-Calculator/" target="_blank">Calculate CGPA</a><br>

This program is a CGPA (Cumulative Grade Point Average) calculator implemented in HTML, CSS, and JavaScript. It allows the user to enter the number of courses they have taken, and for each course, they can input the course name, credit hours, grade received, and an improved grade if applicable.

The program calculates the CGPA based on the grades and credit hours entered by the user. The grade is entered as a string (for example, "O", "A+", etc.), and the corresponding numeric value is displayed in the "Grade Value" column. The CGPA is then calculated and displayed below the table.

The program also calculates an improved CGPA using the improved grades entered by the user. The improved grade is also entered as a string, and its corresponding numeric value is displayed in the "Improved Grade Value" column. The improved CGPA is calculated in the same way as the original CGPA and is displayed next to it.

The program also provides the functionality to export the current records to a JSON file. The user can download this file and use it later to import the records back into the program. This is done through the "Export Data" button, which creates a downloadable JSON file containing the current records when clicked, and a file input element that reads a JSON file and imports the records when a file is selected. The imported records are used to recreate the table and recalculate the CGPA and improved CGPA. 

This program is dynamic and updates the CGPA and improved CGPA whenever a grade or improved grade input field is changed. The table can be recreated with a different number of courses by changing the number in the input field and clicking the "Create Table" button again. The CGPA and improved CGPA are recalculated whenever the table is recreated. 

In summary, this program provides a user-friendly interface for students to calculate their CGPA, see the effect of improving their grades, and save their records for future reference. It's a handy tool for academic planning and goal setting.
