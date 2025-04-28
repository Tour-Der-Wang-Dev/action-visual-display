
import React from 'react';
import WorkflowItem from './WorkflowItem';
import { WorkflowRun } from '../../types/github';
import { Skeleton } from '../ui/skeleton';

interface WorkflowListProps {
  workflowRuns: WorkflowRun[];
  isLoading?: boolean;
  error?: string;
}

const WorkflowList = ({ workflowRuns, isLoading = false, error }: WorkflowListProps) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-destructive bg-destructive/10 p-4 text-destructive">
        <p>Error loading workflow runs: {error}</p>
      </div>
    );
  }

  if (workflowRuns.length === 0) {
    return (
      <div className="rounded-lg border p-6 text-center">
        <h3 className="text-lg font-medium">No workflow runs found</h3>
        <p className="text-muted-foreground mt-2">
          No GitHub workflow runs are available to display.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {workflowRuns.map((run) => (
        <WorkflowItem key={run.id} run={run} />
      ))}
    </div>
  );
};

export default WorkflowList;
