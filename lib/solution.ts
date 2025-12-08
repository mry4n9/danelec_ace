import {
  CircleSpark,
  DashboardSpeed,
  DatabaseTag,
  DataTransferDown,
  GasTank,
  Glasses,
  HealthShield,
  SeaWaves,
  Timer,
  VideoCamera,
} from "iconoir-react";

export const solutions = [
  {
    title: `Danelec Fleet Insights`,
    icon: DashboardSpeed,
    description: `Track and boost ship performance`,
    promptValue: `Danelec Fleet Insights: Optmizes vessel performance with unified fleet-level data and actionable efficiency insights`,
    subSolution: [
      {
        title: `Data Insights`,
        description: `Aggregates and analyzes ship data from multiple sources to deliver a unified view of fleet performance and efficiency.`,
        subPromptValue: `Data Insights - Aggregates and analyzes ship data from multiple sources to deliver a unified view of fleet performance and efficiency.`,
      },
      {
        title: `Fleet Insights`,
        description: `Provides comprehensive fleet-level performance analytics, operational insights, and predictive maintenance recommendations.`,
        subPromptValue: `Fleet Insights - Provides comprehensive fleet-level performance analytics, operational insights, and predictive maintenance recommendations.`,
      },
      {
        title: `Emission Compliance`,
        description: `Supports emissions compliance with automated reporting, transparency, and environmental performance tracking.`,
        subPromptValue: `Emission Compliance - Supports emissions compliance with automated reporting, transparency, and environmental performance tracking.`,
      },
      {
        title: `Data Quality`,
        description: `Lorem Ipsum`,
        subPromptValue: `Lorem Ipsum`,
      },
    ],
  },

  {
    title: `Danelec Voyage Insights`,
    icon: Glasses,
    description: `Enhance voyage planning`,
    promptValue: `Danelec Voyage Insights: Transforms voyage data into clear performance, fuel, and route optimization intelligence.`,
    subSolution: [
      {
        title: `Voyage Optimization`,
        description: `Optimizes voyage planning and execution by analyzing fuel consumption, route efficiency, and vessel performance metrics.`,
        subPromptValue: `Voyage Optimization`,
      },
    ],
  },

  {
    title: `Danelec Green Charter`,
    icon: GasTank,
    description: `Reduce Fuel and Emissions`,
    promptValue: `Danelec Green Charter: Supports emissions compliance with automated reporting, transparency, and environmental performance tracking.`,
    subSolution: [
      {
        id: `1`,
        title: `Voyage Optimization`,
        description: `LoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        subPromptValue: `Voyage Optimization`,
      },
    ],
  },

  {
    title: `Danelec Onboard Insights`,
    icon: SeaWaves,
    description: `Elevate Onboard Operations`,
    promptValue: `Danelec Onboard Insights: Delivers real-time operational data directly from ship systems for faster, smarter onboard decisions.`,
    subSolution: [
      {
        title: `Onboard Insights`,
        description: `LoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        subPromptValue: `Onboard Insights`,
      },
    ],
  },

  {
    title: `Danelec Collect`,
    icon: DataTransferDown,
    description: `Unlock The Power of Maritime Data`,
    promptValue: `Danalec Collect: Securely acquires and normalizes vessel data from heterogeneous ship systems into a consistent digital format.`,
    subSolution: [
      {
        title: `Danelec Collect`,
        description: `LoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        subPromptValue: `Danelec Collect`,
      },
    ],
  },

  {
    title: `Danelec Edge`,
    icon: Timer,
    description: `Secure Application Uptime`,
    promptValue: `Danelec Edge: Edge-computing platform that processes, compresses, and transmits ship data reliably—online or offline.`,
    subSolution: [
      {
        title: `Danelec Edge`,
        description: `LoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        subPromptValue: `Danelec Edge`,
      },
    ],
  },

  {
    title: `Kyma Power Meter`,
    icon: CircleSpark,
    description: `Track vessel power`,
    promptValue: `Kyma Power Meter: Measures and logs shaft power, torque, and propulsion efficiency with high accuracy and low maintenance.`,
    subSolution: [
      {
        title: `EPL to ShaPoLi`,
        description: `LoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        subPromptValue: `EPL to ShaPoLi`,
      },
    ],
  },

  {
    title: `Danelec VDR`,
    icon: DatabaseTag,
    description: `Reliable Voyage Data Recording`,
    promptValue: `Danelec VDR: Reliable, compliant data recorder ensuring mandatory voyage, sensor, and audio capture for safety and investigations.`,
    subSolution: [
      {
        title: `DM100 VDR G3`,
        description: `The DM100 VDR G3 delivers reliable, compliant, and future-proof voyage data recording to ensure vessel safety and meet regulatory requirements.
        It transforms the VDR from a regulatory box into a high-bandwidth operational intelligence hub, capturing richer sensor, navigation, and video data for better investigations and performance insights.
        Its remote diagnostics and easy retrofit design reduce downtime and total cost of ownership, making fleet-wide management more efficient.`,
        subPromptValue: `DM100 VDR G3`,
      },
      {
        title: `DM100 S-VDR G3`,
        description: `LoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        subPromptValue: `DM100 S-VDR G3`,
      },
    ],
  },

  {
    title: `Danelec Safety Insights`,
    icon: HealthShield,
    description: `Monitor and Prepare for Service`,
    promptValue: `Danelec Safety Insights: Analyzes safety-critical data to identify risks, prevent incidents, and improve operational safety behavior.`,
    subSolution: [
      {
        title: `Safety Insights`,
        description: `LoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        subPromptValue: `Safety Insights`,
      },
    ],
  },

  {
    title: `Danelec IPVI`,
    icon: VideoCamera,
    description: `Onboard Awareness`,
    promptValue: `Danelec IPVI: Unifies performance, engine, and voyage data into a single analytical layer for end-to-end vessel optimization.`,
    subSolution: [
      {
        title: `IPVI`,
        description: `LoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        subPromptValue: `Danelec IPVI`,
      },
    ],
  },
];
