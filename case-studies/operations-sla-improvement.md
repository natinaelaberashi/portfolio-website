# Case Study — Operations SLA & Exception Analysis

## Situation

An operations support team wants to understand why some cases consume more resolution time and why SLA performance varies across categories.

For this portfolio case study, I created a synthetic dataset and analyzed it using SQL and Power BI-style KPI reporting.

## Objective

The analysis was designed to answer five practical questions:

- Where is workload concentrated?
- Which categories create the most SLA pressure?
- Which root causes appear repeatedly?
- Which priorities require closer monitoring?
- What operational actions could be tested?

## Approach

**1. Validate the data**

Checked case status, priority, resolution time, SLA indicator, exception flag, category, channel, and root-cause fields.

**2. Calculate KPIs**

Created measures for:

- Total cases
- SLA compliance
- Average resolution hours
- Exception rate
- Workload by team/category

**3. Investigate patterns**

Compared performance by category, team, priority, channel, and root cause.

**4. Translate findings into actions**

Focused recommendations on recurring exceptions, SLA pressure, and investigation workflow rather than simply reporting numbers.

## Example Findings

In the synthetic sample, transaction-related cases contain a noticeable concentration of exceptions, with integration issues and system errors recurring as root-cause categories.

This suggests that an operations team could test:

- targeted runbooks for recurring transaction exceptions;
- earlier escalation for high-priority cases;
- closer monitoring of integration-related failures;
- weekly review of SLA and resolution-time trends.

## Expected Business Value

The purpose of the exercise is to demonstrate a repeatable decision process:

**Operational Data → KPI → Pattern → Root Cause → Action → Follow-up KPI**

No real business improvement is claimed from this synthetic exercise. The value demonstrated is the analytical method.

## Tools

Power BI • SQL • Excel-style KPI analysis • Operational Reporting • Root-Cause Analysis • SLA Monitoring

## Portfolio Integrity

All data and findings are synthetic and created for demonstration. No employer, customer, production, or confidential information is used.
