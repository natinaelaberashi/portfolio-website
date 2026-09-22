# Transmission Operations Analyst Lab

A synthetic operations-analysis project modeled around **transaction/message transmission monitoring, exceptions, retries, SLA reporting, and operational handover**.

## Scenario

An operations analyst monitors transmissions across different channels, identifies failures and retries, checks SLA performance, and communicates exceptions to the next support team.

## Analysis Flow

```text
Transmission
     ↓
Status / Exception Check
     ↓
Retry & Failure Analysis
     ↓
SLA Review
     ↓
Root-Cause Category
     ↓
Operational Handover
```

## What It Demonstrates

- High-volume transaction/message monitoring
- Transmission success/failure analysis
- Exception and retry investigation
- SLA-oriented operational reporting
- Root-cause categorization
- Daily operations handover reporting
- SQL analysis of operational data

## Project Structure

- `data/transmissions.csv` — synthetic transmission records
- `sql/analysis.sql` — operational SQL queries
- `handover/daily-handover.md` — sample analyst handover format
- `insights.md` — operational findings

## Skills Demonstrated

Operations Monitoring • Exception Handling • Incident Analysis • SLA Reporting • SQL • Root-Cause Analysis • Handover Documentation

## Data Integrity

The dataset is synthetic and does not represent any employer, customer, or production system.
