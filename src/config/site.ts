/**
 * CarrierClaim AI Configuration Hub
 * Central Schema & Data Provider for DTC Carrier Claims Automation.
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
  subtext: string;
  badge: string;
}

export interface TableRow {
  id: string;
  entityName: string;
  category: string;
  status: 'active' | 'verified' | 'queued' | 'flagged';
  latency: string;
  provider: string;
  updatedAt: string;
  payload: Record<string, unknown>;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: 'stripe' | 'linear' | 'notion' | 'lovable' | 'bloomberg' | 'apple';
  primaryNav: NavItem[];
  metrics: MetricItem[];
  workflow: {
    badge: string;
    title: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    defaultInput: string;
    buttonLabel: string;
    sampleResponse: Record<string, unknown>;
  };
  table: {
    badge: string;
    title: string;
    description: string;
    columns: { key: string; label: string }[];
    rows: TableRow[];
  };
}

export const siteConfig: SiteConfig = {
  slug: 'carrierclaim-ai',
  name: 'CarrierClaim AI',
  badge: 'DTC Logistics Automation v1.0',
  tagline: 'Autonomous Shipping Carrier Claims Engine',
  description: 'End-to-end pipeline automating CX evidence extraction, carrier API filing (FedEx, UPS, USPS, DHL), and continuous reimbursement monitoring for DTC brands.',
  archetype: 'stripe',
  primaryNav: [
    { id: 'cockpit', label: 'Claims Cockpit' },
    { id: 'pipeline', label: 'Carrier AI Engine' },
    { id: 'records', label: 'Claims Ledger' },
  ],
  metrics: [
    {
      id: 'resolution_speed',
      title: 'Resolution Velocity',
      value: '3.4 Days',
      change: '-86% cycle time',
      trend: 'up',
      subtext: 'Down from 24-day manual carrier turnaround',
      badge: 'Speed Metric',
    },
    {
      id: 'recovery_rate',
      title: 'Recovery Rate',
      value: '94.2%',
      change: '+$48,600/qtr',
      trend: 'up',
      subtext: 'Direct cash recaptured from damaged/lost shipments',
      badge: 'Cash Recovery',
    },
    {
      id: 'cx_extraction',
      title: 'CX Intake Velocity',
      value: '42s / Claim',
      change: '-98% manual entry',
      trend: 'up',
      subtext: 'Multimodal vision verifies box damage & receipts',
      badge: 'Autonomous',
    },
    {
      id: 'filing_accuracy',
      title: 'First-Pass Approval',
      value: '99.8%',
      change: 'Zero rejects',
      trend: 'up',
      subtext: 'Pre-validated against strict carrier schemas',
      badge: 'NIST AI RMF',
    },
  ],
  workflow: {
    badge: 'Live CX-to-Carrier Claims Pipeline',
    title: 'Automate DTC Carrier Claim Submission',
    description: 'Test how the engine ingests CX ticket evidence, verifies packaging damage via multimodal vision, constructs carrier API payloads (FedEx, UPS, USPS), and schedules status monitoring.',
    inputLabel: 'Inbound CX Ticket Evidence & Shipment Manifest:',
    inputPlaceholder: 'Enter order ID, carrier, tracking number, item value, and damage description...',
    defaultInput: 'Order #DTC-84920 | Carrier: FedEx Home Delivery | Tracking: 781290384192 | Customer: Sarah Jenkins | Value: $148.50 | Item: Organic Cold-Brew Bottle 12-Pack (Glass) | Damage Report: "Package arrived soaked, outer carton completely crushed, 6 bottles shattered inside. Customer submitted 3 photos showing soaked corrugated packaging and cracked bottles."',
    buttonLabel: 'Extract Evidence & Submit Claim to Carrier API',
    sampleResponse: {
      status: 'CLAIM_SUBMITTED_AND_CONFIRMED',
      claim_reference_id: 'FEDEX-CLM-9920148',
      carrier_route: 'FedEx Claims API v1 (/claims/v1/claims)',
      damage_classification: 'Concealed Damage / Broken Perishable Beverage',
      evidence_verification: {
        photos_analyzed: 3,
        damage_severity: 'CRITICAL (Glass Shatter + Liquid Loss)',
        outer_carton_damage: 'Crushed Corners & Liquid Bleed Confirmed',
        packaging_standard: 'ISTA-3A Packaging Guidelines Verified',
        pii_scrubbed: 'Customer credit card & phone numbers tokenized',
      },
      carrier_api_dispatch: {
        endpoint: 'https://apis.fedex.com/claims/v1/claims',
        tracking_number: '781290384192',
        declared_value: '$148.50',
        claimed_amount: '$148.50',
        filing_deadline_days_left: 54,
        acknowledgement_code: '201_CREATED',
      },
      cx_monitoring_action: {
        ticket_sync: 'Gorgias Ticket #94812 updated with claim reference',
        customer_action: 'Automated 1-click replacement order queued in Shopify',
        inngest_poller: 'Scheduled 12-hour status check webhook',
      },
      provider_telemetry: {
        engine: 'OpenAI gpt-4o-mini',
        fallback_ready: 'Google Gemini 2.0 Flash',
        latency_ms: 64,
        deterministic_math_isolated: true,
      },
    },
  },
  table: {
    badge: 'Real-Time Operational Queue',
    title: 'Processed Claims & Carrier Payout Queue',
    description: 'Real-time stream of DTC damaged and lost shipment claims across UPS, FedEx, USPS, and DHL with 1-click evidence inspection.',
    columns: [
      { key: 'id', label: 'Claim ID' },
      { key: 'entityName', label: 'Order / Customer' },
      { key: 'category', label: 'Carrier & Type' },
      { key: 'status', label: 'Claim Status' },
      { key: 'latency', label: 'API Latency' },
      { key: 'action', label: 'Inspection' },
    ],
    rows: [
      {
        id: 'CLM-9841',
        entityName: 'Order #DTC-84920 (Sarah Jenkins)',
        category: 'FedEx • Damaged Glass Goods',
        status: 'verified',
        latency: '64ms',
        provider: 'OpenAI gpt-4o-mini',
        updatedAt: '2 mins ago',
        payload: {
          tracking_number: '781290384192',
          carrier: 'FedEx Home Delivery',
          item: 'Organic Cold-Brew Bottle 12-Pack',
          declared_value: '$148.50',
          reimbursement_status: 'Approved • Payout Pending ($148.50)',
          evidence_summary: '3 photos verified outer box puncture & shattered glass',
          cx_ticket: 'Gorgias #94812',
          auto_reship: 'Shopify replacement #DTC-84920-R dispatched',
        },
      },
      {
        id: 'CLM-9840',
        entityName: 'Order #DTC-84883 (Michael Chen)',
        category: 'UPS • Broken Cold Chain',
        status: 'verified',
        latency: '52ms',
        provider: 'Gemini 2.0 Flash',
        updatedAt: '14 mins ago',
        payload: {
          tracking_number: '1Z9999999999999999',
          carrier: 'UPS Next Day Air',
          item: 'Artisanal Cheese & Charcuterie Crate',
          declared_value: '$210.00',
          reimbursement_status: 'Approved • Direct ACH Initiated',
          evidence_summary: 'Temperature tracker logged 74°F (spoilage threshold 40°F)',
          cx_ticket: 'Zendesk #77419',
          auto_reship: 'Customer issued full store credit + free gift',
        },
      },
      {
        id: 'CLM-9839',
        entityName: 'Order #DTC-84812 (Emma Davis)',
        category: 'USPS • Lost in Transit',
        status: 'active',
        latency: '41ms',
        provider: 'Deterministic Core',
        updatedAt: '42 mins ago',
        payload: {
          tracking_number: '9400100000000000000000',
          carrier: 'USPS Priority Mail',
          item: 'Specialty Coffee Roaster Bundle',
          declared_value: '$84.00',
          reimbursement_status: 'Under Postal Review (Day 4 of 14)',
          evidence_summary: 'No movement scan in 18 days beyond distribution facility',
          cx_ticket: 'Gorgias #94751',
          auto_reship: 'Replacement order delivered via FedEx Express',
        },
      },
      {
        id: 'CLM-9838',
        entityName: 'Order #DTC-84799 (David Miller)',
        category: 'DHL Express • Outer Carton Crush',
        status: 'queued',
        latency: '78ms',
        provider: 'Inngest Event Bus',
        updatedAt: '1 hr ago',
        payload: {
          tracking_number: '9920194821',
          carrier: 'DHL Express eCommerce',
          item: 'Gourmet Olive Oil 4-Bottle Set',
          declared_value: '$132.00',
          reimbursement_status: 'Queued for Batch EDI Transmission',
          evidence_summary: '2 customer photos show crushed postal carton with oil stains',
          cx_ticket: 'Zendesk #77382',
          auto_reship: 'Pending customer confirmation',
        },
      },
      {
        id: 'CLM-9837',
        entityName: 'Order #DTC-84610 (Suspicious Return)',
        category: 'Claims Firewall • Fraud Intercept',
        status: 'flagged',
        latency: '14ms',
        provider: 'LLM Firewall Inline',
        updatedAt: '2 hrs ago',
        payload: {
          tracking_number: '781002938192',
          carrier: 'FedEx Home Delivery',
          item: 'Premium Wine Reserve 6-Pack',
          declared_value: '$280.00',
          reimbursement_status: 'REJECTED • Photographic Hash Collision',
          evidence_summary: 'Submitted damage photo is bit-for-bit identical to claim #CLM-8102 from 90 days ago',
          cx_ticket: 'Flagged to CX Supervisor',
          auto_reship: 'BLOCKED • Account flagged for repeated claim abuse',
        },
      },
    ],
  },
};
