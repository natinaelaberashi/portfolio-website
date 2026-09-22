# Operations Performance Dashboard — Power BI Portfolio Project

A recruiter-friendly **Power BI portfolio project** demonstrating how operational data can be transformed into KPI reporting, exception analysis, SLA monitoring, and management insights.

## Business Scenario

A support and operations team wants a single dashboard to monitor workload, service quality, resolution performance, and recurring operational issues.

The dataset is synthetic and designed for portfolio demonstration.

## Dashboard KPIs

- Total cases
- SLA compliance %
- Average resolution hours
- Exception rate %
- Open / pending cases
- Cases by priority, category, channel, and team

## Recommended Power BI Pages

### 1. Executive Overview
KPI cards for volume, SLA, resolution time, and exception rate, plus a monthly trend.

### 2. SLA & Resolution
SLA compliance by team and category, average resolution time, and priority comparison.

### 3. Exceptions & Root Causes
Exception rate, root-cause concentration, category/channel analysis, and top recurring issues.

### 4. Team Operations
Workload by team, case status, priority mix, and resolution performance.

## Suggested Power BI Features

- Power Query for data preparation
- DAX measures for KPI calculations
- Slicers for team, category, priority, channel, and status
- Drill-through from summary KPIs to case-level detail
- Conditional formatting for SLA and exception indicators
- Tooltips for operational context

## Example DAX Measures

```DAX
Total Cases = COUNTROWS(Operations)

SLA Compliance % =
DIVIDE(
    CALCULATE(COUNTROWS(Operations), Operations[SLA_Met] = "Yes"),
    [Total Cases]
)

Exception Rate % =
DIVIDE(
    CALCULATE(COUNTROWS(Operations), Operations[Exception_Flag] = "Yes"),
    [Total Cases]
)

Avg Resolution Hours = AVERAGE(Operations[Resolution_Hours])
```

## Business Questions

1. Where is operational workload concentrated?
2. Which categories produce the most exceptions?
3. Which teams have the highest SLA pressure?
4. Which priority levels take longest to resolve?
5. Which root causes should be investigated first?

## Portfolio Note

This is a **synthetic learning project**. It does not represent employer, customer, production, or confidential data.

## Related Case Study

See the portfolio case study: `case-studies/operations-sla-improvement.md`.
