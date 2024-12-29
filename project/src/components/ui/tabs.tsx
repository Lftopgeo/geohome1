import React from 'react';

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

interface TabsListProps {
  className?: string;
  children: React.ReactNode;
}

interface TabsTriggerProps {
  value: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

interface TabsContentProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function Tabs({ defaultValue, className = '', children }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          if (child.type === TabsList) {
            return React.cloneElement(child, {
              ...child.props,
              activeTab,
              setActiveTab
            });
          }
          if (child.type === TabsContent) {
            return React.cloneElement(child, {
              ...child.props,
              isActive: child.props.value === activeTab
            });
          }
          return child;
        }
        return null;
      })}
    </div>
  );
}

export function TabsList({ 
  className = '', 
  children, 
  activeTab, 
  setActiveTab 
}: TabsListProps & { 
  activeTab?: string; 
  setActiveTab?: (value: string) => void 
}) {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === TabsTrigger) {
          return React.cloneElement(child, {
            ...child.props,
            isActive: child.props.value === activeTab,
            onClick: () => setActiveTab?.(child.props.value)
          });
        }
        return child;
      })}
    </div>
  );
}

export function TabsTrigger({ 
  value, 
  className = '', 
  children, 
  isActive,
  onClick 
}: TabsTriggerProps & { 
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-colors ${
        isActive 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      } ${className}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ 
  value, 
  className = '', 
  children, 
  isActive 
}: TabsContentProps & { 
  isActive?: boolean 
}) {
  if (!isActive) return null;
  
  return (
    <div className={className}>
      {children}
    </div>
  );
}
