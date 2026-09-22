-- Production support operational analysis

-- Incident volume by severity
SELECT severity, COUNT(*) AS incident_count
FROM incidents
GROUP BY severity
ORDER BY incident_count DESC;

-- SLA compliance
SELECT
  COUNT(*) AS total_incidents,
  SUM(CASE WHEN sla_met = 'Yes' THEN 1 ELSE 0 END) AS sla_met,
  ROUND(100.0 * SUM(CASE WHEN sla_met = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 1) AS sla_pct
FROM incidents;

-- Average resolution by service
SELECT service, ROUND(AVG(resolution_hours), 2) AS avg_resolution_hours
FROM incidents
WHERE status = 'Resolved'
GROUP BY service
ORDER BY avg_resolution_hours DESC;

-- Recurring root causes
SELECT root_cause, COUNT(*) AS occurrences
FROM incidents
GROUP BY root_cause
ORDER BY occurrences DESC;