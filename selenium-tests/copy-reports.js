import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');
const testsDir = path.join(process.cwd(), 'test-reports');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy HTML Report (POM Modules)
const htmlSrc = path.join(testsDir, 'test-report.html');
const htmlDest = path.join(distDir, 'test-report.html');
if (fs.existsSync(htmlSrc)) {
  fs.copyFileSync(htmlSrc, htmlDest);
  console.log(`Copied POM HTML report to ${htmlDest}`);
}

// Copy Excel Report (POM Modules)
const xlsxSrc = path.join(testsDir, 'test-analysis-report.xlsx');
const xlsxDest = path.join(distDir, 'test-analysis-report.xlsx');
if (fs.existsSync(xlsxSrc)) {
  fs.copyFileSync(xlsxSrc, xlsxDest);
  console.log(`Copied POM Excel report to ${xlsxDest}`);
}

// Copy HTML Report (11 Categories)
const htmlCatSrc = path.join(testsDir, 'test-report-categories.html');
const htmlCatDest = path.join(distDir, 'test-report-categories.html');
if (fs.existsSync(htmlCatSrc)) {
  fs.copyFileSync(htmlCatSrc, htmlCatDest);
  console.log(`Copied Categories HTML report to ${htmlCatDest}`);
}

// Copy Excel Report (11 Categories)
const xlsxCatSrc = path.join(testsDir, 'test-analysis-report-categories.xlsx');
const xlsxCatDest = path.join(distDir, 'test-analysis-report-categories.xlsx');
if (fs.existsSync(xlsxCatSrc)) {
  fs.copyFileSync(xlsxCatSrc, xlsxCatDest);
  console.log(`Copied Categories Excel report to ${xlsxCatDest}`);
}
