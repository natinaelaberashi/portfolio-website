-- Operations KPI Analysis

-- Overall KPI summary
SELECT
  COUNT(*) AS total_cases,
  ROUND(AVG(response_hours), 2) AS avg_response_hours,
  ROUND(AVG(CASE WHEN status='Resolved' THEN resolution_hours END), 2) AS avg_resolution_hours,
  ROUND(100.0 * SUM(CASE WHEN sla_met='Yes' THEN 1 ELSE 0 END) / COUNT(*), 1) AS sla_compliance_pct
FROM operations;

-- Volume by category
SELECT category, COUNT(*) AS case_count
FROM operations
GROUP BY category
ORDER BY case_count DESC;

-- SLA performance by category
SELECT category,
       COUNT(*) AS total_cases,
       ROUND(100.0 * SUM(CASE WHEN sla_met='Yes' THEN 1 ELSE 0 END) / COUNT(*), 1) AS sla_pct
FROM operations
GROUP BY category
ORDER BY sla_pct ASC;

-- Root-cause concentration
SELECT root_cause, COUNT(*) AS occurrences
FROM operations
GROUP BY root_cause
ORDER BY occurrences DESC;