import {
  CircleSpark,
  DashboardSpeed,
  DatabaseTag,
  DataTransferDown,
  Glasses,
  HealthShield,
  SeaWaves,
  Timer,
} from "iconoir-react";

export const solutions = [
  {
    title: `Danelec Fleet Insights`,
    icon: DashboardSpeed,
    description: `Track and boost ship performance`,
    promptValue: `de`,
    subSolution: [
      {
        title: `Fleet Insights`,
        description: `Aggregates and analyzes ship data from multiple sources to deliver a unified view of fleet performance and efficiency.`,
        subPromptValue: `Danelec Fleet Insights: is a cloud-based fleet performance platform that aggregates high-frequency sensor and operational data from all vessels into a unified, real-time dashboard to give shipowners and fleet managers a holistic, trusted “single source of truth” for performance, emissions, and maintenance decision-making.
        It enables rapid identification of underperforming vessels, monitoring of key indicators like fuel use and carbon intensity, automated reporting for compliance, and cross-team collaboration to optimize efficiency, reduce emissions, and improve overall fleet profitability and sustainability.`,
      },
      {
        title: `Emission Compliance`,
        description: `Make emissions reporting audit-ready with trusted vessel data`,
        subPromptValue: `Emissions Compliance: Uses high-frequency operational and fuel-related data to support accurate, auditable emissions monitoring and reporting across the fleet.
        Emphasize transparency, consistency, and shore-to-ship workflows.
        Keywords: audit trail, MRV/DCS, CII trajectory, charterer reporting.`,
      },
      {
        title: `Data Quality`,
        description: `Provides comprehensive fleet-level performance analytics, operational insights, and predictive maintenance recommendations.`,
        subPromptValue: `Data Quality: Improves confidence in fleet analytics by validating, cleaning, and standardizing incoming vessel data so teams can act on reliable KPIs.
        Emphasize anomaly detection, missing-data handling, and fleet-wide comparability.
        Keywords: validation rules, sensor drift, data completeness, benchmarking.`,
      },
    ],
  },

  {
    title: `Danelec Voyage Insights`,
    icon: Glasses,
    description: `Enhance voyage planning`,
    promptValue: `gergea`,
    subSolution: [
      {
        title: `Voyage Insights`,
        description: `Optimizes voyage planning and execution by analyzing fuel consumption, route efficiency, and vessel performance metrics.`,
        subPromptValue: `Danelec Voyage Insights is an advanced, data-driven maritime voyage planning and optimization platform that uses high-frequency vessel data, predictive simulations, and machine learning to model and compare voyage scenarios, enabling more efficient, sustainable, and commercially optimal operations.
        It provides pre- and mid-voyage recommendations on routes, speeds, and performance targets to reduce fuel consumption, lower emissions, improve Carbon Intensity Indicator (CII) outcomes, and help both onboard crews and shore teams make informed decisions that balance cost, timing, and regulatory goals.
        By quantifying trade-offs and fostering alignment between owners, operators, and charterers, it enhances operational certainty, supports compliance, and drives measurable performance improvements across voyages.`,
      },
      {
        title: `Boil Off Gas`,
        description: `Optimizes voyage planning and execution by analyzing fuel consumption, route efficiency, and vessel performance metrics.`,
        subPromptValue: `Danelec’s Boil-Off Gas: capability within Voyage Insights is a specialized optimization solution for LNG carriers that models and simulates how cargo conditions (temperature, pressure, composition) evolve throughout a voyage and uses this predictive insight to recommend optimal operational setpoints—such as shaft speed, engine modes, reliquefaction rates, and gas combustion unit (GCU) usage—to minimize LNG consumption, maximize cargo delivery, reduce fuel costs and emissions, and ensure required arrival conditions are met; this data-driven approach empowers commercial and operations teams to make informed decisions, negotiate terminal conditions, and improve overall voyage efficiency and sustainability.`,
      },
      {
        title: `Voyage Optimization`,
        description: `Optimizes voyage planning and execution by analyzing fuel consumption, route efficiency, and vessel performance metrics.`,
        subPromptValue: `Danelec Voyage Insights (focus on Voyage Optimization): is an advanced voyage optimization and planning platform that uses high-fidelity vessel data, predictive analytics, and machine learning to simulate and recommend the most efficient, sustainable, and commercially optimal voyage strategies tailored to real-world conditions.
        It enables ship operators to forecast voyage outcomes, balance competing objectives such as fuel consumption, emissions (e.g., CII), arrival times, cargo delivery, and cost, and adjust speed, routes, and operational set-points dynamically based on weather, performance models, and charter requirements.
        By delivering data-driven pre-voyage and mid-voyage recommendations, transparent comparisons between intended and optimized plans, and insights that improve decision-making across onboard crews and shore teams, it helps reduce operational uncertainty, cut fuel use, lower emissions, and maximize overall voyage performance.`,
      },
    ],
  },

  {
    title: `Danelec Onboard Insights`,
    icon: SeaWaves,
    description: `Elevate Onboard Operations`,
    promptValue: `Danelec Onboard Insights: is a real-time ship performance monitoring solution that empowers bridge and engine officers with continuous, actionable data from key sensors—engine, hull, and propeller—directly onboard, enabling crews to quickly assess performance, optimize energy use, detect inefficiencies, and support predictive maintenance under any operating conditions.
    Trusted on over 1,800 vessels, it visualizes critical performance parameters against design baselines, helps improve fuel efficiency and emissions outcomes, and adapts to diverse ship types and configurations so crews can proactively manage operational performance and maintenance needs with accuracy and context at the point of action.`,
    subSolution: [],
  },

  {
    title: `Danelec Collect`,
    icon: DataTransferDown,
    description: `Unlock The Power of Maritime Data`,
    promptValue: `Danelec Collect: is an affordable, flexible, and scalable maritime data-collection solution that securely gathers high-frequency sensor data from a vessel and transmits it to shore-based systems for comprehensive analysis and operational optimization.
    It acts as a central IoT hub, aggregating data from onboard sources with sophisticated compression and secure networking, enabling reliable integration with in-house or third-party applications so shipowners and operators can improve decision-making, asset management, safety, and regulatory compliance.`,
    subSolution: [],
  },

  {
    title: `Danelec Edge`,
    icon: Timer,
    description: `Secure Application Uptime`,
    promptValue: `Danelec Edge: is an onboard server-based maritime edge computing solution designed to ensure uninterrupted uptime and reliable performance of critical vessel applications by providing robust local compute capacity, advanced cybersecurity, and resilient power support even during system failures or power loss.
    It keeps real-time data and vital digital services continuously available on the vessel while enabling remote fleet-wide management and monitoring, helping operators maintain operations, compliance, and access to essential applications under challenging maritime conditions.`,
    subSolution: [],
  },

  {
    title: `Kyma Power Meter`,
    icon: CircleSpark,
    description: `Track vessel power`,
    promptValue: `Danelec Kyma Power Meter: is a marine performance measurement system that continuously and precisely quantifies the power transfer from a vessel’s engine to its propeller shaft by measuring shaft power, torque, thrust, and RPM with high accuracy.
    By providing real-time, dependable propulsion data, it enables ship operators to optimize fuel efficiency, improve performance, extend equipment life, and support more sustainable and cost-effective maritime operations.`,
    subSolution: [],
  },

  {
    title: `Danelec VDR`,
    icon: DatabaseTag,
    description: `Reliable Voyage Data Recording`,
    promptValue: `htrjty`,
    subSolution: [
      {
        title: `VDR`,
        description: `Voyage data recorder system that captures bridge audio, sensor data, and navigation information with 30 days of recording capacity.`,
        subPromptValue: `Danelec VDR (Voyage Data Recorder): is a compliant, always-on system that continuously records navigational, sensor, audio, and system data from a vessel to support incident investigation, safety, and regulatory requirements. It acts as the ship’s “black box,” ensuring critical voyage data is securely captured, protected, and retrievable, while providing a reliable foundation for compliance, safety analysis, and operational transparency.`,
      },
      {
        title: `IPVI`,
        description: `Integrated Platform for Vessel Intelligence providing enhanced onboard awareness through intelligent video monitoring.`,
        subPromptValue: `Danelec IPVI (Independent Performance Verification Indicator): is a software-based solution that uses recorded vessel and operational data to objectively verify how a ship was operated before, during, and after an incident or claim. Its core purpose is to provide an independent, tamper-proof view of vessel performance and events, enabling shipowners, charterers, and insurers to establish facts, reduce disputes, and support transparent, data-driven decision-making.`,
      },
    ],
  },

  {
    title: `Danelec Safety Insights`,
    icon: HealthShield,
    description: `Monitor and Prepare for Service`,
    promptValue: `Danelec Safety Insights: is a software solution that analyzes vessel and operational data to identify safety risks, near-misses, and unsafe behaviors before they lead to incidents.
    By turning data from onboard systems into clear safety indicators and trends, it helps ship operators proactively improve safety performance, support compliance, and make more informed decisions to reduce accidents and operational risk across the fleet.`,
    subSolution: [],
  },
];
