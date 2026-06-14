# Database Model Notes

## Core flow

```text
artist -> ip_package -> offer -> deal -> pnl_scenario -> document/settlement
promoter -> offer/deal
venue -> deal
fan -> demand_signal
partner_application -> approved organization/user
```

## Key statuses

### Partner application

- pending
- reviewing
- approved
- rejected

### Offer/deal pipeline

- submitted
- under_review
- counter_offer
- approved
- contracting
- confirmed
- executed
- settled
- archived

## Access control

v0.1 can start with service-role inserts for public forms, but production must add RLS policies and authenticated access separation.
