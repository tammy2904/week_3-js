function giveJobToStudent(student, jobName) {
    const updatedStudent = {
      ...student,
      job: jobName 
  
    };
    alert(`Поздравляем! У студента ${updatedStudent.fullName} появилась но-вая работа! Теперь он ${jobName}`);
  

    return updatedStudent;
}
  
  const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
  };
// Test
  const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
  

  console.log(updatedStudent);
  