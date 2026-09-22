-- Customer Support Analytics
-- All data is synthetic.

-- 1. Case volume by category
SELECT category, COUNT(*) AS case_count
FROM tickets
GROUP BY category
ORDER BY case_count DESC;

-- 2. SLA compliance
SELECT
  ROUND(100.0 * SUM(CASE WHEN sla_met = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 1) AS sla_compliance_pct
FROM tickets;

-- 3. Average response time by team
SELECT team, ROUND(AVG(response_hours), 2) AS avg_response_hours
FROM tickets
GROUP BY team
ORDER BY avg_response_hours;

-- 4. Average resolution time for resolved cases
SELECT team, ROUND(AVG(resolution_hours), 2) AS avg_resolution_hours
FROM tickets
WHERE status = 'Resolved'
GROUP BY team
ORDER BY avg_resolution_hours;

-- 5. SLA misses by category
SELECT category, COUNT(*) AS sla_misses
FROM tickets
WHERE sla_met = 'No'
GROUP BY category
ORDER BY sla_misses DESC;
