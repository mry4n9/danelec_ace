"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

const solutions = [
  {
    id: "fleet-insights",
    name: "Danelec Fleet Insights",
    icon: DashboardSpeed,
    description: "Track and boost ship performance",
    subSolutions: [
      { id: "1", name: "Data Insights", description: "3" },
      { id: "2", name: "Fleet Insights", description: "3" },
      { id: "3", name: "Emission Compliance", description: "3" },
    ],
  },

  {
    id: "voyage-insights",
    name: "Danelec Voyage Insights",
    icon: Glasses,
    description: "Enhance voyage planning",
    subSolutions: [{ id: "1", name: "Voyage Optimization", description: "3" }],
  },

  {
    id: "green-charter",
    name: "Danelec Green Charter",
    icon: GasTank,
    description: "Reduce Fuel and Emissions",
    subSolutions: [{ id: "1", name: "Voyage Optimization", description: "3" }],
  },

  {
    id: "onboard-insights",
    name: "Danelec Onboard Insights",
    icon: SeaWaves,
    description: "Elevate Onboard Operations",
    subSolutions: [
      { id: "1", name: "Onboard Insights solution 1", description: "3" },
    ],
  },

  {
    id: "collect",
    name: "Danelec Collect",
    icon: DataTransferDown,
    description: "Unlock The Power of Maritime Data",
    subSolutions: [{ id: "1", name: "Voyage Optimization", description: "3" }],
  },

  {
    id: "edge",
    name: "Danelec Edge",
    icon: Timer,
    description: "Secure Application Uptime",
    subSolutions: [{ id: "1", name: "Voyage Optimization", description: "3" }],
  },

  {
    id: "kyma-power-meter",
    name: "Kyma Power Meter",
    icon: CircleSpark,
    description: "Track vessel power",
    subSolutions: [{ id: "1", name: "EPL to ShaPoLi", description: "3" }],
  },

  {
    id: "vdr",
    name: "Danelec VDR",
    icon: DatabaseTag,
    description: "Reliable Voyage Data Recording",
    subSolutions: [{ id: "1", name: "DM100 VDR G3", description: "3" }],
  },

  {
    id: "safety-insights",
    name: "Danelec Safety Insights",
    icon: HealthShield,
    description: "Monitor and Prepare for Service",
    subSolutions: [{ id: "1", name: "Safety Insights 1", description: "3" }],
  },

  {
    id: "ipvi",
    name: "Danelec IPVI",
    icon: VideoCamera,
    description: "Onboard Awareness",
    subSolutions: [{ id: "1", name: "Safety Insights 1", description: "3" }],
  },
];

export default function SolutionSelector() {
  return (
    <div className="mt-20">
      <h2>Select Solution</h2>
      <p className="text-lg mb-10 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
        Choose one solution to create copys for.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols 3 lg:grid-cols-3 gap-6">
        {solutions.map((solution) => (
          <Card
            key={solution.id}
            className="cursor-pointer transition-all hover:border-neutral-400 w-50 h-50"
          >
            <CardHeader className="flex flex-col items-center">
              <div className="p-1.5 border rounded-2xl border-neutral-400 ">
                <solution.icon className="size-10 " />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle className="tracking-wide font-bold">
                {solution.name.includes("Danelec") ? (
                  <>
                    <span className="text-[#FF4E2A]">Danelec</span>{" "}
                    {solution.name.replace("Danelec ", "")}
                  </>
                ) : (
                  solution.name
                )}
              </CardTitle>
              <CardDescription className="text-xs">
                {solution.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

{
  /* This is the old selection.
      <div className="mb-8 flex items-center gap-2">
        <span className="text-sm text-slate-600">Solution Selection</span>
      </div>
      <div>
        {solutions.map((solution) => (
          <Card
            key={solution.id}
            className="cursor-pointer hover:border-[#FF4E2A] hover:bg-[#F2DED9]"
          >
            <CardHeader>
              <CardTitle>{solution.name}</CardTitle>
              <CardDescription>{solution.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      */
}

{
  /*
"use client";
import React, { useState } from "react";
import { Flash } from "iconoir-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Product data structure based on Danelec's offerings
const products = [
  {
    id: "fleet-insights",
    name: "Danelec Fleet Insights",
    icon: Flash,
    description: "Real-time performance monitoring and emissions reduction",
    subSolutions: [
      {
        id: "data-quality",
        name: "Data Quality",
        description:
          "Ensure reliable, high-fidelity sensor data with automated validation",
      },
      {
        id: "emissions-compliance",
        name: "Emissions Compliance",
        description:
          "Monitor and reduce carbon footprint with trusted technical insights",
      },
      {
        id: "performance-optimization",
        name: "Performance Optimization",
        description:
          "Identify underperforming vessels and optimize fuel consumption",
      },
    ],
  },
  {
    id: "onboard-insights",
    name: "Danelec Onboard Insights",
    icon: Flash,
    description: "Empower crew with ship performance insights",
    subSolutions: [
      {
        id: "bridge-ecr-monitoring",
        name: "Bridge & ECR Monitoring",
        description: "Real-time KPIs for bridge and engine control room",
      },
      {
        id: "crew-optimization",
        name: "Crew Optimization Tools",
        description:
          "Enable proactive operational efficiency for onboard teams",
      },
    ],
  },
  {
    id: "danelec-collect",
    name: "Danelec Collect",
    icon: Flash,
    description: "Maritime IoT for high-frequency data collection",
    subSolutions: [
      {
        id: "iot-infrastructure",
        name: "IoT Infrastructure",
        description: "Scalable solution supporting up to 250 data tags",
      },
      {
        id: "shore-transmission",
        name: "Shore Transmission",
        description:
          "Secure data transmission from vessel to shore-based systems",
      },
    ],
  },
  {
    id: "danelec-edge",
    name: "Danelec Edge",
    icon: Flash,
    description: "Edge computing for uninterrupted onboard applications",
    subSolutions: [
      {
        id: "application-uptime",
        name: "Application Uptime",
        description:
          "Ensure continuous access to critical onboard applications",
      },
      {
        id: "local-processing",
        name: "Local Processing",
        description: "Process data locally with reduced latency",
      },
    ],
  },
  {
    id: "vdr-svdr",
    name: "VDR & S-VDR Systems",
    icon: Flash,
    description: "Voyage Data Recorders for maritime safety compliance",
    subSolutions: [
      {
        id: "dm100-vdr",
        name: "DM100 VDR",
        description:
          "Full Voyage Data Recorder for passenger ships and cargo vessels",
      },
      {
        id: "dm100-svdr-g2",
        name: "DM100 S-VDR G2",
        description: "Next-generation Simplified VDR with cloud connectivity",
      },
      {
        id: "dm100-lvdr",
        name: "DM100 L-VDR",
        description: "Lightweight VDR for specific vessel types",
      },
    ],
  },
];

export default function SolutionSelector() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSubSolution, setSelectedSubSolution] = useState("");

  const handleProductSelect = (productId) => {
    setSelectedProduct(productId);
    setSelectedSubSolution(""); // Reset sub-solution when changing product
  };

  const handleContinue = () => {
    if (selectedProduct && selectedSubSolution) {
      alert(
        `Selected: ${selectedProduct} → ${selectedSubSolution}\nReady to proceed to next step!`
      );
      // In real implementation, this would navigate to the next wizard step
    }
  };

  const selectedProductData = products.find((p) => p.id === selectedProduct);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header 
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Flash className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-slate-900">Danelec ACE</h1>
          </div>
          <p className="text-slate-600 text-lg">
            Select a solution to create your LinkedIn campaign content
          </p>
        </div>

        {/* Progress Indicator 
        <div className="mb-8 flex items-center gap-2">
          <Badge variant="default" className="bg-blue-600">
            Step 1 of 4
          </Badge>
          <span className="text-sm text-slate-600">Solution Selection</span>
        </div>

        {/* Main Content 
        <div className="space-y-8">
          {/* Product Selection 
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Choose a Danelec Solution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => {
                const Icon = product.icon;
                const isSelected = selectedProduct === product.id;

                return (
                  <Card
                    key={product.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                      isSelected
                        ? "ring-2 ring-blue-600 shadow-lg border-blue-600"
                        : "hover:border-blue-300"
                    }`}
                    onClick={() => handleProductSelect(product.id)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg ${
                              isSelected ? "bg-blue-600" : "bg-blue-100"
                            }`}
                          >
                            <Icon
                              className={`w-6 h-6 ${
                                isSelected ? "text-white" : "text-blue-600"
                              }`}
                            />
                          </div>
                        </div>
                        {isSelected && (
                          <Flash className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                      <CardTitle className="text-lg mt-2">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Sub-Solution Selection (shown after product selection) 
          {selectedProductData && (
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Flash className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Select Focus Area for {selectedProductData.name}
                </h3>
              </div>

              <RadioGroup
                value={selectedSubSolution}
                onValueChange={setSelectedSubSolution}
                className="space-y-3"
              >
                {selectedProductData.subSolutions.map((subSolution) => (
                  <div
                    key={subSolution.id}
                    className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedSubSolution === subSolution.id
                        ? "border-blue-600 bg-blue-50"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                    onClick={() => setSelectedSubSolution(subSolution.id)}
                  >
                    <RadioGroupItem
                      value={subSolution.id}
                      id={subSolution.id}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor={subSolution.id}
                        className="font-medium text-slate-900 cursor-pointer"
                      >
                        {subSolution.name}
                      </Label>
                      <p className="text-sm text-slate-600 mt-1">
                        {subSolution.description}
                      </p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Action Buttons 
          <div className="flex justify-between items-center pt-4">
            <Button variant="outline" disabled className="text-slate-400">
              Back
            </Button>
            <Button
              onClick={handleContinue}
              disabled={!selectedProduct || !selectedSubSolution}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Continue to Next Step
            </Button>
          </div>
        </div>

        {/* Selection Summary 
        {selectedProduct && selectedSubSolution && (
          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-start gap-3">
              <Flash className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium text-green-900">Selection Complete</p>
                <p className="text-sm text-green-700 mt-1">
                  {selectedProductData.name} →{" "}
                  {
                    selectedProductData.subSolutions.find(
                      (s) => s.id === selectedSubSolution
                    )?.name
                  }
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
*/
}
