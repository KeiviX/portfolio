export default function ProjectsTab() {
  return (
    <section className="w-full max-w-3xl mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Personal Projects</h2>
      <div className="flex flex-col gap-6">
        <div className="p-4 rounded-lg bg-white dark:bg-gray-900 shadow border border-gray-100 dark:border-gray-800">
          <h3 className="font-bold text-lg mb-1">Trading Group Platform – Full-stack Developer</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Designed a trading signals platform using React, TypeScript, and Material-UI. Integrated TDD principles with Cypress for E2E testing, and optimized performance through code-splitting and lazy loading.</p>
          <a href="https://trading-execution.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Live site</a>
        </div>
      </div>
    </section>
  );
}
