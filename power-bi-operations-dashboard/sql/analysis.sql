-- Operations Performance Dashboard
-- Synthetic portfolio dataset

-- 1. Overall KPI summary
SELECT
    COUNT(*) AS total_cases,
    ROUND(AVG(resolution_hours), 2) AS avg_resolution_hours,
    ROUND(100.0 * SUM(CASE WHEN sla_met = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 1) AS sla_compliance_pct,
    ROUND(100.0 * SUM(CASE WHEN exception_flag = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 1) AS exception_rate_pct
FROM operations;

-- 2. Workload and SLA by team
SELECT
    team,
    COUNT(*) AS case_volume,
    ROUND(AVG(resolution_hours), 2) AS avg_resolution_hours,
    ROUND(100.0 * SUM(CASE WHEN sla_met = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 1) AS sla_compliance_pct
FROM operations
GROUP BY team
ORDER BY case_volume DESC;

-- 3. Exception concentration by root cause
SELECT
    root_cause,
    COUNT(*) AS exception_cases
FROM operations
WHERE exception_flag = 'Yes'
GROUP BY root_cause
ORDER BY exception_cases DESC;

-- 4. Performance by category
SELECT
    category,
    COUNT(*) AS case_volume,
    ROUND(AVG(resolution_hours), 2) AS avg_resolution_hours,
    ROUND(100.0 * SUM(CASE WHEN sla_met = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 1) AS sla_compliance_pct
FROM operations
GROUP BY category
ORDER BY avg_resolution_hours DESC;
