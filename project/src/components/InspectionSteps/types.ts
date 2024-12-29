export interface InspectionStep {
  id: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  label: string;
  path: string;
  description: string;
}

export interface StepNavigationProps {
  currentStep: string;
  onStepChange?: (stepId: string) => void;
}