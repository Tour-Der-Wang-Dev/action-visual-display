
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { Clock } from 'lucide-react';

interface WorkflowItemProps {
  title: string;
  status: string;
  dueDate: string;
  interactive?: boolean;
}

const WorkflowItem = ({ 
  title, 
  status, 
  dueDate, 
  interactive = true 
}: WorkflowItemProps) => {
  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-500/10 text-green-600';
      case 'in progress':
        return 'bg-yellow-500/10 text-yellow-600';
      default:
        return 'bg-gray-500/10 text-gray-600';
    }
  };

  return (
    <Card 
      className={cn(
        "transition-all duration-200",
        interactive && "hover:shadow-md cursor-pointer"
      )}
    >
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Badge className={cn("w-fit", getStatusColor())}>
          {status}
        </Badge>
      </CardHeader>
      <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="h-4 w-4" />
        <span>Due: {format(new Date(dueDate), 'PPP')}</span>
      </CardContent>
    </Card>
  );
};

export default WorkflowItem;
