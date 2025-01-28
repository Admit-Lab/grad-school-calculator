function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.style.display = 'none');

    document.getElementById(`tab-${tabId}`).classList.add('active');
    document.getElementById(`${tabId}-content`).style.display = 'block';
}


function calculateScore() {
    const gpa = parseFloat(document.getElementById('gpa').value) || 0;
    const majorGpa = parseFloat(document.getElementById('majorGpa').value) || 0;
    const workExperience = parseFloat(document.getElementById('workExperience').value) || 0;
    const internships = parseFloat(document.getElementById('internships').value) || 0;
     const leadership = parseFloat(document.getElementById('leadership').value) || 0;
    const sopScore = parseFloat(document.getElementById('sopScore').value) || 0;
    const lorScore = parseFloat(document.getElementById('lorScore').value) || 0;
    const awards = parseFloat(document.getElementById('awards').value) || 0;
      const extracurriculars = parseFloat(document.getElementById('extracurriculars').value) || 0;
    const courseRigor = parseFloat(document.getElementById('courseRigor').value) || 0;
    const fitScore = parseFloat(document.getElementById('fitScore').value) || 0;
      const institutionTier = parseFloat(document.getElementById('institutionTier').value) || 0;

    //Scale Values
    const scaledGPA = gpa * 25
    const scaledMajorGPA = majorGpa * 25
    const scaledCourseRigor = courseRigor * 20
    const scaledInstitutionTier = institutionTier * 5;
    const scaledWorkExperience = workExperience * 10
    const scaledInternships = internships * 10;
     const scaledLeadership = leadership * 10;
    const scaledSOP = sopScore * 20
    const scaledLOR = lorScore * 20;
    const scaledAwards = awards * 10;
    const scaledExtracurricular = extracurriculars * 10;
    const scaledFitScore = fitScore * 20


      const academicScore = scaledGPA * .2 + scaledMajorGPA * .2 + scaledCourseRigor *.1 + scaledInstitutionTier * .1
    const experienceScore = scaledWorkExperience * .2 + scaledInternships * .2 + scaledLeadership *.2;
    const personalScore = scaledSOP * .2 + scaledLOR * .2 + scaledFitScore * .2;
    const otherScore = scaledAwards * .1 + scaledExtracurricular * .1

     const totalScore = academicScore + experienceScore + personalScore + otherScore

  document.getElementById('acceptanceScore').textContent = totalScore.toFixed(2) + "%";


    showTab('results');
}

// Initial tab: Show academic
showTab('academic');
