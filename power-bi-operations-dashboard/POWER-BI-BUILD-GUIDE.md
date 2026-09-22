# Power BI Build Guide

This folder is designed to be imported into **Power BI Desktop**.

## 1. Import the data

Open Power BI Desktop → **Get Data → Text/CSV** → select:

`data/operations.csv`

## 2. Create relationships

This project uses one flat operational table, so no relationship is required for the starter dashboard.

## 3. Create measures

Use the DAX measures in `README.md`:

- Total Cases
- SLA Compliance %
- Exception Rate %
- Avg Resolution Hours

## 4. Build four pages

### Executive Overview
Cards:
- Total Cases
- SLA Compliance %
- Avg Resolution Hours
- Exception Rate %

Visuals:
- Cases by month
- Cases by category
- Cases by priority

### SLA & Resolution
Visuals:
- SLA compliance by team
- Average resolution hours by category
- Resolution hours by priority

### Exceptions & Root Causes
Visuals:
- Exception rate by category
- Root-cause distribution
- Exception cases by channel

### Team Operations
Visuals:
- Workload by team
- SLA by team
- Priority mix by team

## 5. Add slicers

Use:
- Team
- Priority
- Category
- Channel
- Status

## 6. Make it recruiter-ready

Keep the dashboard clean and business-focused. The first page should answer:

**How much work? How fast? How well? Where are the problems?**

Avoid filling the page with unnecessary visuals.

## 7. Portfolio integrity

The dataset is synthetic. Do not describe the dashboard as a real employer performance dashboard or claim that its findings occurred in a real organization.

## Web demonstration

A lightweight HTML version of the dashboard is included as `dashboard.html` so the project can also be demonstrated directly from GitHub Pages without requiring a recruiter to install Power BI.
