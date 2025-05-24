export default function ExperienceTab() {
  return (
    <section className="w-full max-w-3xl mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Professional Experience</h2>
      <div className="mb-6">
        <h3 className="font-bold text-lg">HM Land Registry – London, UK</h3>
        <div className="italic text-gray-600 dark:text-gray-400">Test Automation Engineer | Oct 2022 – Present</div>
        <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300">
          <li>Spearheaded cloud-based testing for a 120+ TB AWS migration project, validating ETL pipelines and ML model outputs.</li>
          <li>Maintained and enhanced automation frameworks (ETL, API, and UI), reducing test runtime by 33% and significantly improving reliability.</li>
          <li>Stabilized and refactored a legacy Selenium/Cucumber UI regression pack, reducing flaky test failures.</li>
          <li>Created overnight Jenkins job runs with real-time MS Teams notifications, streamlining CI/CD visibility and early defect detection.</li>
          <li>Onboarded peers onto automation frameworks and provided ongoing support for debugging and test development.</li>
          <li>Authored manual test documentation and regression strategies to support QA team growth and onboarding.</li>
          <li>Collaborated cross-functionally with DevOps and developers to resolve AWS/cloud-based testing challenges.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="font-bold text-lg">Sparta Global – Remote</h3>
        <div className="italic text-gray-600 dark:text-gray-400">Java SDET | Aug 2022 – Oct 2022</div>
        <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300">
          <li>Developed unit and integration tests in Java, using JUnit and Selenium for backend services and web applications.</li>
          <li>Contributed to a mock-based test framework with Mockito, enabling efficient and isolated test scenarios.</li>
          <li>Participated in Agile ceremonies and contributed to sprint planning, retrospectives, and continuous improvement initiatives.</li>
        </ul>
      </div>
    </section>
  );
}
