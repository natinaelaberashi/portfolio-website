-- Transmission Operations Analysis

-- Success/failure rate
SELECT status, COUNT(*) AS message_count
FROM transmissions
GROUP BY status;

-- Error concentration
SELECT error_type, COUNT(*) AS occurrences
FROM transmissions
WHERE error_type <> 'None'
GROUP BY error_type
ORDER BY occurrences DESC;

-- SLA performance by team
SELECT team,
       COUNT(*) AS total_messages,
       SUM(CASE WHEN sla_met = 'Yes' THEN 1 ELSE 0 END) AS sla_met
FROM transmissions
GROUP BY team;

-- Average processing time by channel
SELECT channel, ROUND(AVG(processing_seconds), 1) AS avg_processing_seconds
FROM transmissions
GROUP BY channel
ORDER BY avg_processing_seconds DESC;