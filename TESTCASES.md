# GeoProof - Complete Test Suite Catalog

This catalog outlines all **110 Category-based E2E Test Cases** and **105 POM-based E2E Test Cases** designed for the GeoProof platform. These tests run locally and on GitHub Actions, generating interactive HTML dashboards and Excel spreadsheets.

---

## Part 1: Category-Based Test Suite (110 Cases)

These cases are structured across 11 key software testing disciplines.

### 1. Functional Testing (15 Cases)

| Test ID | Test Case Name | Description | Expected Status |
| :--- | :--- | :--- | :--- |
| `FUNC-001` | Verify Landing Page title | Ensure application web title matches GeoProof layout specs. | **PASSED** |
| `FUNC-002` | Verify Header is displayed | Ensure main layout header component is mounted and visible. | **PASSED** |
| `FUNC-003` | Navigate to Features Page | Click and verify navigation tab to Features description. | **PASSED** |
| `FUNC-004` | Navigate to Security Page | Click and verify navigation tab to Security information. | **PASSED** |
| `FUNC-005` | Navigate to Contact Page | Click and verify navigation tab to Contact form. | **PASSED** |
| `FUNC-006` | Verify Enter Platform navigation | Click CTA button and verify transition to the main platform dashboard. | **PASSED** |
| `FUNC-007` | Verify Live Capture Tab Display | Verify that the Live Camera capture tab is active on dashboard load. | **PASSED** |
| `FUNC-008` | Verify Upload Tab Navigation | Select the Image Upload mode and verify view change. | **PASSED** |
| `FUNC-009` | Verify Drag-and-Drop Prompt Text | Check presence of file upload instructions and elements. | **PASSED** |
| `FUNC-010` | Verify Return to Camera Mode | Toggle dashboard pill back to Live Camera capture viewport. | **PASSED** |
| `FUNC-011` | Verify Camera Block Warning | Ensure fallback alert displays when video stream is blocked/unavailable. | **PASSED** |
| `FUNC-012` | Verify Refresh GPS Button click | Click GPS refresh button and check trigger of location geolocator. | **PASSED** |
| `FUNC-013` | Verify Satellite Stream Panel Presence | Check visibility of GPS coordinate telemetry sidebar panel. | **PASSED** |
| `FUNC-014` | Navigate to Stats Dashboard tab | Click navigation tab to statistics analytics panel. | **PASSED** |
| `FUNC-015` | Navigate to History Log tab | Click navigation tab to capture history logs table. | **PASSED** |

### 2. UI/UX Testing (10 Cases)

| Test ID | Test Case Name | Description | Expected Status |
| :--- | :--- | :--- | :--- |
| `UI-001` | Navigate to Settings tab | Open configurations panel for language and design adjustments. | **PASSED** |
| `UI-002` | Verify Dark Mode switch container | Check presence of Dark Mode toggle switch and label. | **PASSED** |
| `UI-003` | Toggle Dark Mode on | Click switch and verify document theme transition to dark mode. | **PASSED** |
| `UI-004` | Verify html tag gets .dark class | Ensure dark theme CSS selector binds correctly. | **PASSED** |
| `UI-005` | Toggle Dark Mode off | Click switch and verify transition back to light mode theme. | **PASSED** |
| `UI-006` | Verify html tag removes .dark class | Ensure dark theme is disabled. | **PASSED** |
| `UI-007` | Verify Logo visual element | Verify header SVG logo is styled and positioned correctly. | **PASSED** |
| `UI-008` | Verify Footer Text content | Ensure copyright text and developer references render in footer. | **PASSED** |
| `UI-009` | Verify Language selector dropdown | Check visibility of multi-language configuration dropdown. | **PASSED** |
| `UI-010` | Verify Stats dashboard grid cards | Ensure grid layout of stats displays 3 responsive data cards. | **PASSED** |

### 3. Compatibility Testing (10 Cases)

| Test ID | Test Case Name | Description | Expected Status |
| :--- | :--- | :--- | :--- |
| `COMPAT-001` | Verify Browser UserAgent compatibility | Ensure browser `navigator.userAgent` is readable and valid. | **PASSED** |
| `COMPAT-002` | Resize window to Desktop (1280x800) | Ensure desktop layouts scale and do not overflow borders. | **PASSED** |
| `COMPAT-003` | Resize window to Tablet portrait (768x1024) | Verify portrait responsive wrapping and layout column shifts. | **PASSED** |
| `COMPAT-004` | Resize window to Mobile screen (375x667) | Verify mobile-optimized drawer menu and stacked viewport. | **PASSED** |
| `COMPAT-005` | Verify App Main Header compatibility | Validate header flex box wrapping rules. | **PASSED** |
| `COMPAT-006` | Verify App Main Footer compatibility | Validate footer alignment on viewport. | **PASSED** |
| `COMPAT-007` | Verify Dashboard Layout Grid compatibility | Ensure main layout scales without breaking. | **PASSED** |
| `COMPAT-008` | Verify Leaflet CSS container compatibility | Ensure map container maintains height aspect ratio constraint. | **PASSED** |
| `COMPAT-009` | Verify Lucide SVG element compatibility | Ensure inline SVG icons scale gracefully on display. | **PASSED** |
| `COMPAT-010` | Verify Select tag font-family compatibility | Ensure drop downs load custom font stacks. | **PASSED** |

### 4. Performance Testing (10 Cases)

| Test ID | Test Case Name | Description | Expected Status |
| :--- | :--- | :--- | :--- |
| `PERF-001` | Measure Initial Page load speed | Track load performance for initial HTML bundle. | **PASSED** |
| `PERF-002` | Measure API /api/verify-image-ai latency | Monitor verification logic endpoint execution latency. | **PASSED** |
| `PERF-003` | Measure OSM Geocoding lookup time | Benchmark reverse geocoding external API response latency. | **PASSED** |
| `PERF-004` | Measure Local Database parse speed | Measure parsing execution latency for browser localStorage. | **PASSED** |
| `PERF-005` | Canvas rendering process speed check | Measure latency for image processing canvas operations. | **PASSED** |
| `PERF-006` | GPS Navigator request timing | Validate geolocation API response time. | **PASSED** |
| `PERF-007` | Vite assets compilation check | Verify compiled client JS package assets deliver instantly. | **PASSED** |
| `PERF-008` | Leaflet CSS stylesheet render checks | Verify stylesheet rendering doesn't delay map display. | **PASSED** |
| `PERF-009` | Translation array switch latency | Measure memory switch delay when toggling translations. | **PASSED** |
| `PERF-010` | React component render loop check | Check component state render ticks to prevent loops. | **PASSED** |

### 5. Security Testing (10 Cases)

| Test ID | Test Case Name | Description | Expected Status |
| :--- | :--- | :--- | :--- |
| `SEC-001` | Anti-Tampering clean image validation | Verify genuine base64 images evaluate with status `VERIFIED`. | **PASSED** |
| `SEC-002` | Anti-Tampering tampered image validation | Verify manipulated inputs evaluate with status `TAMPERED`. | **PASSED** |
| `SEC-003` | SHA-256 Checksum validation | Validate SHA-256 hexadecimal digests match 64 characters. | **PASSED** |
| `SEC-004` | Anti-Tamper module state detection check | Check status integrity verification parameters. | **PASSED** |
| `SEC-005` | GPS secure tunnel signature binding | Ensure latitude/longitude numbers are bound to signed tokens. | **PASSED** |
| `SEC-006` | Cloud Sync HTTPS transport status | Check transport protocol security (SSL/TLS checks). | **PASSED** |
| `SEC-007` | CSRF security token binding simulation | Ensure mock database transactions reject malformed calls. | **PASSED** |
| `SEC-008` | Direct API Verify payload input validation | Ensure validation requests without image payload reject with 400. | **PASSED** |
| `SEC-009` | Direct API Captures storage boundaries | Ensure empty captures submissions reject with 400. | **PASSED** |
| `SEC-010` | Local storage namespace protection check | Ensure localStorage database namespace is unique and secure. | **PASSED** |

### 6. API Testing (10 Cases)
*Covers `/api/captures` and `/api/verify-image-ai` endpoints (mock validation and logging checks `API-001` to `API-010`).*

### 7. Database Testing (10 Cases)
*Validates in-memory capture store, JSON serialization bounds, entry unique keys, and clearing queries (`DB-001` to `DB-010`).*

### 8. Accessibility Testing (10 Cases)
*Checks WCAG contrast ratios, aria-labels on interactive elements, main header landmark tags, and keyboard focus borders (`ACCESS-001` to `ACCESS-010`).*

### 9. Mobile-Specific Testing (10 Cases)
*Tests touch target widths, responsive stack layouts, mobile drawer navigation toggle, and canvas width scaling (`MOB-001` to `MOB-010`).*

### 10. Regression Testing (10 Cases)
*Runs validation sets to ensure existing settings, camera parameters, and localization translations remain functional (`REG-001` to `REG-010`).*

### 11. End-to-End (E2E) Testing (5 Cases)
*E2E flow test runs encompassing: Load Landing -> Enter Platform -> Capture/Upload image -> Verify AI report -> Check History Logs updates (`E2E-001` to `E2E-005`).*

---

## Part 2: Page Object Model (POM) Test Suite (105 Cases)

Organized around modular browser page classes inside `selenium-tests/pages/`.

### 1. Login Module (`LOG-001` to `LOG-015`)
- Checks site title, SVG logo, welcome layouts, navigation routing for Features, Security, and Contact tabs, and transition triggers to the platform dashboard.

### 3. Camera Module (`CAM-001` to `CAM-020`)
- Tests Live Capture viewport selectors, headless camera warnings fallbacks, upload mode switching, drag-and-drop file target binds, and canvas photo capture state.

### 4. GeoTag Module (`GEO-001` to `GEO-020`)
- Validates location accuracy readings, Leaflet map renders, OSM reverse geocoded address parsing, and geodetic data card layout bindings.

### 5. QR Module (`QR-001` to `QR-015`)
- Checks QR Scanner overlay display, reader initialization hooks, verification code signature outputs, and validation metrics overlays.

### 6. Reports Module (`REP-001` to `REP-015`)
- Validates log listings display, cryptographic hash labels, verification status badge colorings, and transition triggers to and from details overlay.

### 7. Admin Module (`ADM-001` to `ADM-020`)
- Verifies dark theme toggle toggling, document body theme switches, dropdown language changes (English/Tamil translations), and control limits.
