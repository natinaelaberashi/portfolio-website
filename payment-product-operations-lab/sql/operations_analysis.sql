-- Payment Product Operations Lab
-- Synthetic dataset: data/transactions.csv

-- 1. Total transaction value
SELECT SUM(amount) AS total_transaction_value
FROM transactions;

-- 2. Average transaction amount
SELECT AVG(amount) AS average_transaction_amount
FROM transactions;

-- 3. Failed transaction count
SELECT COUNT(*) AS failed_transactions
FROM transactions
WHERE status = 'Failed';

-- 4. Failed transaction value
SELECT SUM(amount) AS failed_transaction_value
FROM transactions
WHERE status = 'Failed';

-- 5. Transaction count and value by country
SELECT
    country,
    COUNT(*) AS transaction_count,
    SUM(amount) AS total_amount
FROM transactions
GROUP BY country
ORDER BY total_amount DESC;

-- 6. Failed volume and value by partner
SELECT
    partner,
    COUNT(*) AS failed_count,
    SUM(amount) AS failed_value
FROM transactions
WHERE status = 'Failed'
GROUP BY partner
ORDER BY failed_count DESC, failed_value DESC;

-- 7. SLA breaches
SELECT
    transaction_id,
    partner,
    country,
    product,
    status,
    processing_minutes,
    sla_minutes,
    processing_minutes - sla_minutes AS minutes_over_sla
FROM transactions
WHERE processing_minutes > sla_minutes
ORDER BY minutes_over_sla DESC;

-- 8. Error-category pattern analysis
SELECT
    error_category,
    COUNT(*) AS issue_count,
    SUM(amount) AS affected_value
FROM transactions
WHERE error_category <> 'None'
GROUP BY error_category
ORDER BY issue_count DESC, affected_value DESC;

-- 9. Product performance
SELECT
    product,
    COUNT(*) AS transaction_count,
    SUM(CASE WHEN status = 'Failed' THEN 1 ELSE 0 END) AS failed_count,
    SUM(amount) AS total_amount
FROM transactions
GROUP BY product
ORDER BY failed_count DESC;

-- 10. Operational investigation queue
SELECT
    transaction_id,
    partner,
    country,
    product,
    amount,
    status,
    processing_minutes,
    sla_minutes,
    error_category
FROM transactions
WHERE status IN ('Failed','Pending')
   OR processing_minutes > sla_minutes
ORDER BY amount DESC, processing_minutes DESC;
