export default function SkillsTab() {
  return (
    <section className="w-full max-w-3xl mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Certifications & Skills</h2>
      <div className="mb-2">ISTQB Certified Tester Foundation Level</div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
        <li>Languages: Python, Java, Ruby, JavaScript, TypeScript</li>
        <li>Testing Tools & Frameworks: Cucumber, Selenium, Postman, Jest, Cypress</li>
        <li>Cloud & Testing Tools: AWS (Lambda, S3), Jenkins, Docker</li>
        <li>Testing Methodologies: TDD, BDD, API Testing, ETL Testing</li>
        <li>Version Control: Git, GitLab, GitHub</li>
        <li>CI/CD: Jenkins, GitLab CI</li>
        <li>Agile Methodologies: Scrum, Kanban</li>
      </ul>
    </section>
  );
}
