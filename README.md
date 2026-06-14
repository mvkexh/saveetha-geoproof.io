<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/1ce83aaa-cfb9-46be-bc0c-6833a5bcf830

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Automated Testing Suite (100+ Test Cases)

GeoProof includes a comprehensive Selenium testing suite containing over **100+ E2E test cases** to validate all platform functions, security features, performance metrics, and responsive UI components.

### Test Catalog
For a detailed list of all 110 categories test cases and 105 POM modular test cases, please view the [TESTCASES.md](TESTCASES.md) document.

### Running Tests Locally
To run the automated tests on your machine, first ensure Chrome is installed, start the local server, and execute either of the following commands:

* **Page Object Model (POM) Module Tests** (105 cases):
  ```bash
  npm run test:pom
  ```
* **Category-based Tests** (110 cases):
  ```bash
  npm run test:selenium
  ```

### Test Analysis Reports
When the tests execute, they automatically generate Excel analysis spreadsheets and interactive HTML dashboards. You can find them in the local folder at:
- `test-reports/test-analysis-report.xlsx` (POM E2E Test Results)
- `test-reports/test-report.html` (POM Interactive HTML Dashboard)
- `test-reports/test-analysis-report-categories.xlsx` (Category Test Results)
- `test-reports/test-report-categories.html` (Category Interactive HTML Dashboard)

