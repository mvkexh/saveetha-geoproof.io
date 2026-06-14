@echo off
echo ====================================================
echo   GEOPROOF EXCEL TEST REPORTS GENERATOR
echo ====================================================
echo.
echo Running Excel sheet generation script...
node scripts/generate-mock-excel.js
echo.
echo [✔] Excel reports generated successfully in the 'test-reports' folder!
echo.
pause
