
import React from 'react';
import { WorkflowRun } from '../../types/github';
import { formatDistanceToNow, format } from 'date-fns';
import { CheckCircle, XCircle, GitPullRequest, Clock, Loader } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface WorkflowItemProps {
  run: WorkflowRun;
}

const WorkflowItem = ({ run }: WorkflowItemProps) => {
  const getStatusIcon = () => {
    switch (run.status) {
      case 'completed':
        return run.conclusion === 'success' ? (
          <CheckCircle className="h-6 w-6 text-green-500" />
        ) : (
          <XCircle className="h-6 w-6 text-red-500" />
        );
      case 'in_progress':
        return <Loader className="h-6 w-6 text-yellow-500 animate-spin" />;
      case 'queued':
        return <Clock className="h-6 w-6 text-yellow-500" />;
      default:
        return <Clock className="h-6 w-6 text-muted-foreground" />;
    }
  };

  const getStatusText = () => {
    if (run.status === 'completed') {
      return run.conclusion === 'success' ? 'Success' : 'Failed';
    }
    return run.status === 'in_progress' ? 'In progress' : 'Queued';
  };

  const getStatusColor = () => {
    if (run.status === 'completed') {
      return run.conclusion === 'success' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600';
    }
    return 'bg-yellow-500/10 text-yellow-600';
  };

  const runDate = new Date(run.created_at);
  const formattedDate = formatDistanceToNow(runDate, { addSuffix: true });
  const exactDate = format(runDate, 'PPpp');

  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div>{getStatusIcon()}</div>
          <div className="flex flex-col">
            <h3 className="font-medium text-lg text-foreground">{run.name}</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              <Badge variant="outline" className="flex items-center gap-1">
                <GitPullRequest className="h-3 w-3" />
                {run.head_branch}
              </Badge>
              <Badge className={cn("text-xs", getStatusColor())}>
                {getStatusText()}
              </Badge>
            </div>
          </div>
        </div>
        <div className="text-right">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="text-sm text-muted-foreground">{formattedDate}</div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{exactDate}</p>
            </TooltipContent>
          </Tooltip>
          
          <div className="text-xs text-muted-foreground mt-1">
            #{run.id} • {run.run_number}
          </div>
        </div>
      </div>

      {run.duration_ms && (
        <div className="mt-3 text-sm text-muted-foreground">
          Duration: {(run.duration_ms / 1000).toFixed(1)}s
        </div>
      )}
      
      {run.html_url && (
        <div className="mt-3">
          <a 
            href={run.html_url}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-sm text-primary hover:underline"
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default WorkflowItem;
